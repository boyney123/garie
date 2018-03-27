var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();

collectDefaultMetrics({ register });

const gauge = new client.Gauge({ name: 'metric_name', help: 'metric_help' });
const counter = new client.Counter({
  name: 'metric_name2',
  help: 'metric_help32'
});

counter.inc(Math.random() * 100);

app.get('/count', (req, res) => {
  counter.inc(Math.random() * 100);
  res.send(200);
});

app.get('/metrics', (req, res) => {
	res.set('Content-Type', register.contentType);
	res.end(client.register.metrics());
});


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

module.exports = app;
