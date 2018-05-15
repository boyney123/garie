const client = require('prom-client');

const metrics = {};

const raiseMetric = (name, product, value) => {

    if(!metrics[name]){

        metrics[name] = new client.Gauge({ 
            name: name,
            help: 'metric_help',
            labelNames: ['product'] 
        });
      }

      metrics[name].set({ product }, parseFloat(value));

      return metrics;

};

module.exports = {
    raiseMetric
};