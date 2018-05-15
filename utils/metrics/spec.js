const { raiseMetric } = require('./');

describe('metrics helper', () => {

    describe('raiseMetric', () => {

        it('sets a new promethus Gauge with the given name, product and value', () => {

            const metrics = raiseMetric('test', 'test-product', 10);

            expect(metrics['test']).toEqual(expect.objectContaining({
                name: 'test',
                labelNames: ['product'],
                help: 'metric_help',
                aggregator: 'sum',
                hashMap: {
                    'product:test-product': expect.objectContaining({
                        value: 10
                    })
                }
            }));

        });

    });

});