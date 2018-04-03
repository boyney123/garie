const express = require('express');
const router = express.Router();
const request = require('request-promise');
const client = require('prom-client');
const { parse } = require('url');

const { raiseMetric } = require('../../utils/metrics');

const lighthouseUrl = process.env.LIGHTHOUSE_URL || 'http://localhost:8080';
const LIGHTHOUSE_API_KEY = process.env.LIGHTHOUSE_API_KEY;

const gauges = {};

const raiseLightHouseMetrics = (url, data, product) => {

    const { reportCategories = [], audits = {} } = data; 
  
    reportCategories.forEach(( { name = '', score } = {}) => {
      // join spaces with underscores...
      const metric_name = name.replace(/ /g, '_').toLowerCase();
      raiseMetric(`light_house_${metric_name}`, product, score);
    });
  
    const auditMetrics = [
      'time-to-first-byte',
      'first-meaningful-paint',
      'speed-index-metric',
      'first-interactive',
      'redirects'
    ];
  
    auditMetrics.forEach(metric => {
      const { rawValue } = audits[metric] || {};

      if(rawValue !== undefined){
        const metric_name = metric.replace(/ /g, '_').replace(/-/g, '_').toLowerCase();
        raiseMetric(`light_house_${metric_name}`, product, rawValue);
      }
  
    });
    
};

router.get('/', async (req, res, next) => {

    const url = req.query.url;
    const product = req.query.product;
  
    if(!url || !product){
      res.send(400);
      return;
    }

    try{
  
      const body = await request(`${lighthouseUrl}/ci?key=${LIGHTHOUSE_API_KEY}&url=${url}&output=json`);

      const jsonurl = body.match(/\/report.*.json/g);
      const resultUri = jsonurl[jsonurl.length - 1];
  
      const auditResponse = await request(`${lighthouseUrl}${resultUri}`);
      const lighthouseData = JSON.parse(auditResponse);
  
      // Raise metrics with data
      raiseLightHouseMetrics(url, lighthouseData, product);
  
      res.status(200).send(lighthouseData);
  
    } catch(err) {
        console.log(err);
        res.status(202).send(err);
    }
  
  
  });

module.exports = router;
