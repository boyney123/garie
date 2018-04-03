const request = require('supertest');
const { app } = require('../../app');
const nock = require('nock');
const exampleData = require('./example-data.json');
const { raiseMetric } = require('../../utils/metrics');

jest.mock('../../utils/metrics', () => ({
    raiseMetric: jest.fn()
}))

nock('http://localhost:8080')
    .persist()
    .get('/ci')
    .query({key: 'LIGHTHOUSE_API_KEY', url: 'https://www.example.com', output: 'json'})
    .reply(200, '/report.1.json');

nock('http://localhost:8080')
    .persist()
    .get('/report.1.json')
    .reply(200, exampleData);

describe('GET /lighthouse', function() {

    it('returns a 400 status code when no url is given', async () => {
        await request(app)
            .get('/lighthouse?product=test')
            .set('Accept', 'application/json')
            .expect(400);
    });

    it('returns a 400 status code when no product is given', async () => {
        await request(app)
            .get('/lighthouse?url=http://www.test.co.uk')
            .set('Accept', 'application/json')
            .expect(400);
    });

    [
        { metric: 'light_house_performance', value: 100 },
        { metric: 'light_house_progressive_web_app', value: 36.36363636363637 },
        { metric: 'light_house_accessibility', value: 88.23529411764706 },
        { metric: 'light_house_best_practices', value: 81.25 },
        { metric: 'light_house_seo', value: 88.88888888888889 },
        { metric: 'light_house_time_to_first_byte', value: 566.5039999999999 },
        { metric: 'light_house_first_meaningful_paint', value: 734.3 },
        { metric: 'light_house_speed_index_metric', value: 735 },
        { metric: 'light_house_first_interactive', value: 734.343 },
        { metric: 'light_house_redirects', value: 0 },
    ].forEach(testcase => {
        it(`raises a metric for ${testcase.metric}`, (done) => {

            request(app)
                .get('/lighthouse?url=https://www.example.com&product=test')
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                    const metric = raiseMetric.mock.calls.find(item => item.indexOf(testcase.metric) > -1);
                    expect(metric).toEqual([testcase.metric, 'test', testcase.value]);
                    done();
            });
            
        });
    })

    it('returns lighthouse data for given url', async () => {

        await request(app)
            .get('/lighthouse?url=https://www.example.com&product=test')
            .expect(200, exampleData)

    });


});