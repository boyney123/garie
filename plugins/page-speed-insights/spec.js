const request = require('supertest');
const { app } = require('../../app');
const nock = require('nock');
const mobileData = require('./data-example/mobile.json');
const desktopData = require('./data-example/desktop.json');
const { raiseMetric } = require('../../utils/metrics');

jest.mock('../../utils/metrics', () => ({
    raiseMetric: jest.fn()
}))

nock('https://www.googleapis.com')
    .persist()
    .get('/pagespeedonline/v4/runPagespeed')
    .query({key: 'PAGE_SPEED_INSIGHTS_KEY', url: 'https://www.example.com', strategy: 'mobile'})
    .reply(200, mobileData);

nock('https://www.googleapis.com')
    .persist()
    .get('/pagespeedonline/v4/runPagespeed')
    .query({key: 'PAGE_SPEED_INSIGHTS_KEY', url: 'https://www.example.com', strategy: 'desktop'})
    .reply(200, desktopData);


describe('GET /page-speed-insights', function() {

    it('returns a 400 status code when no url is given', async () => {
        await request(app)
            .get('/page-speed-insights?product=test')
            .set('Accept', 'application/json')
            .expect(400);
    });

    it('returns a 400 status code when no product is given', async () => {
        await request(app)
            .get('/page-speed-insights?url=http://www.test.co.uk')
            .set('Accept', 'application/json')
            .expect(400);
    });

    [
        { metric: 'page_speed_insights_page_stats_numberResources', value: 1 },
        { metric: 'page_speed_insights_page_stats_numberHosts', value: 1 },
        { metric: 'page_speed_insights_page_stats_totalRequestBytes', value: "37" },
        { metric: 'page_speed_insights_page_stats_htmlResponseBytes', value: "1579" },
        { metric: 'page_speed_insights_page_stats_overTheWireResponseBytes', value: "606" },
        { metric: 'page_speed_insights_page_stats_numTotalRoundTrips', value: 3 },
        { metric: 'page_speed_insights_page_stats_numRenderBlockingRoundTrips', value: 0 },
        { metric: 'page_speed_insights_speed_score_mobile', value: 100 },
        { metric: 'page_speed_insights_speed_score_desktop', value: 100 },
    ].forEach(testcase => {
        it(`raises a metric for ${testcase.metric}`, (done) => {

            request(app)
                .get('/page-speed-insights?url=https://www.example.com&product=test')
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                    const metric = raiseMetric.mock.calls.find(item => item.indexOf(testcase.metric) > -1);
                    expect(metric).toEqual([testcase.metric, 'test', testcase.value]);
                    done();
            });
            
        });
    })

    it('returns page-speed-insights data for given url', async () => {

        await request(app)
            .get('/page-speed-insights?url=https://www.example.com&product=test')
            .expect(200, {
                mobileData,
                desktopData
            })

    });


});