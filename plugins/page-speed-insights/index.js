const express = require('express');
const router = express.Router();
const request = require('request-promise');

const { raiseMetric } = require('../../utils/metrics');

const PAGE_SPEED_INSIGHTS_KEY = process.env.PAGE_SPEED_INSIGHTS_KEY;

const raiseGoogleSpeedMetrics = (url, product, strategy, data) => {

    const { ruleGroups: { SPEED: { score } = {} } = {}, pageStats = {} } = data;
  
    Object.keys(pageStats).forEach(key => {
      raiseMetric(`page_speed_insights_page_stats_${key}`, product, pageStats[key]);
    });

    raiseMetric(`page_speed_insights_speed_score_${strategy}`, product, score);
  
};

const getGoogleSpeedScore = async (url, product, strategy = 'mobile') => {

    try{
  
      const body = await request(`https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=${url}&strategy=${strategy}&key=${PAGE_SPEED_INSIGHTS_KEY}`);
      const data = JSON.parse(body);
      return data;
  
    } catch(err) {
      console.log(err);
      throw new Error('Failed to get page speed data');
    }
  
};


router.get('/', async (req, res, next) => {

    const url = req.query.url;
    const product = req.query.product;
  
    if(!url || !product){
      res.send(400);
      return;
    }

    try{

        const mobileData = await getGoogleSpeedScore(url, product, 'mobile');
        const desktopData = await getGoogleSpeedScore(url, product, 'desktop');

        raiseGoogleSpeedMetrics(url, product, 'mobile', mobileData);
        raiseGoogleSpeedMetrics(url, product, 'desktop', desktopData);
  
        res.status(200).send({ mobileData, desktopData });
  
    } catch(err) {
        console.log(err);
        res.status(202).send(err);
    }
  
  
  });

module.exports = router;
