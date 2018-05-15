const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const app = express();
const client = require('prom-client');

const lighthouse = require('./plugins/lighthouse');
const pageSpeedInsights = require('./plugins/page-speed-insights');

const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/metrics', (req, res) => {
	res.set('Content-Type', register.contentType);
	res.end(client.register.metrics());
});

app.use('/lighthouse', lighthouse);
app.use('/page-speed-insights', pageSpeedInsights);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  app: app,
  client: client
};