## Garie - Making web performance assessable to everyone

[![Built with InfluxDB](https://img.shields.io/badge/built%20with%20-InfluxDB-green.svg)](https://www.influxdata.com/)
[![Built with InfluxDB](https://img.shields.io/badge/built%20with%20-Grafana-green.svg)](https://grafana.com/)
[![Built with InfluxDB](https://img.shields.io/badge/built%20with%20-Docker-blue.svg)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <h3 align="center"><a align="center" href="https://garie.io">garie.io</a><h3>
</h3>

![Garie](./screenshots/garie-dark.png "Garie")

## Highlights

- Get setup with polling performance data and out of the box dashboards within minutes.
- Setup CRON jobs to get performance data at any interval.
- Webhook support (e.g Trigger collection of performance data every release).
- Generates reports with recommended improvements for your website (Using Lighthouse)
- Historic reports. See any report that was generated in the past.
- Generates performance videos.
- Plugin Architecture using Docker

# Currently supported plugins

## [Lighthouse](https://github.com/boyney123/garie-lighthouse)

![Garie](./screenshots/garie-lighthouse.png "Garie")

<p align="center"><a href="https://travis-ci.org/boyney123/garie-lighthouse"><img src="https://img.shields.io/travis/boyney123/garie-lighthouse/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/boyney123/garie-lighthouse/"><img src="https://codecov.io/gh/boyney123/garie-lighthouse/branch/master/graph/badge.svg?token=AoXW3EFgMP" alt="Codecov"></a>
	<a href="https://github.com/boyney123/garie"><img src="https://img.shields.io/badge/plugin%20built%20for-garie-blue.svg" alt="garie"></a>
  </p>

Garie uses Lighthouse to generate reports and also store the lighthouse data into InfluxDB which is accessable in your dashboards.

## [Pagespeed Insights](https://github.com/boyney123/garie-pagespeed-insights)

![Pagespeed Insights](./screenshots/garie-pagespeed-insights.png "Pagespeed Insights")

<p align="center">
<a href="https://travis-ci.org/boyney123/garie-pagespeed-insights"><img src="https://img.shields.io/travis/boyney123/garie-pagespeed-insights/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/boyney123/garie-pagespeed-insights/"><img src="https://codecov.io/gh/boyney123/garie-pagespeed-insights/branch/master/graph/badge.svg?token=AoXW3EFgMP" alt="Codecov"></a>
	<a href="https://github.com/boyney123/garie"><img src="https://img.shields.io/badge/plugin%20built%20for-garie-blue.svg" alt="garie"></a>
</p>

Garie uses Pagespeed insights to get information about the applications page weight and load times.

## [Browsertime](https://github.com/boyney123/garie-pagespeed-insights)

![Pagespeed Insights](./screenshots/garie-pagespeed-insights.png "Pagespeed Insights")

<p align="center">
<a href="https://travis-ci.org/boyney123/garie-browsertime"><img src="https://img.shields.io/travis/boyney123/garie-browsertime/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/boyney123/garie-browsertime/"><img src="https://codecov.io/gh/boyney123/garie-browsertime/branch/master/graph/badge.svg?token=AoXW3EFgMP" alt="Codecov"></a>
	<a href="https://github.com/boyney123/garie"><img src="https://img.shields.io/badge/plugin%20built%20for-garie-blue.svg" alt="garie"></a>
</p>

Garie uses browsertime to generate videos and also .har files. The data is stored into InfluxDB and can be accessed through the dashboards.
