<div align="center">
	<a href="https://garie.io">
    <img alt="styled-components" src="./screenshots/garie-dark.png" height="450px" />
  </a>
</div>

<div align="center">
<p align="center"><a align="center" href="https://garie.io">https://garie.io</a><p>
  <p align="center">
	<a href="https://www.influxdata.com/"><img src="https://img.shields.io/badge/built%20with%20-InfluxDB-green.svg" alt="garie"></a>
		<a href="hhttps://grafana.com/"><img src="https://img.shields.io/badge/built%20with%20-Grafana-green.svg" alt="garie"></a>
		<a href="https://www.docker.com/"><img src="https://img.shields.io/badge/built%20with%20-Docker-blue.svg" alt="garie"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT"></a>
</div>

## Highlights

- Get setup with polling performance data and out of the box dashboards within minutes.
- Setup CRON jobs to get performance data at any interval.
- Webhook support (e.g Trigger collection of performance data every release).
- Generates reports with recommended improvements for your website (Using Lighthouse)
- Historic reports. See any report that was generated in the past.
- Generates performance videos.
- Plugin Architecture using Docker

---

## [Docs](https://garie.io)

**See the documentation at [garie.io/docs](https://garie.io/docs/getting-started/installation)** for more information about using `garie`!

Quicklinks:

- [**Getting started**](https://garie.io/docs/getting-started/installation)
- [Viewing Dashboards](https://garie.io/docs/getting-started/viewing-dashboards)
- [Building your first dashboard](https://garie.io/docs/creating-your-own-dashboard/getting-started)
- [Examples of Garie](https://garie.io/docs/examples/example-list)

## Plugins

### [Lighthouse](https://github.com/boyney123/garie-lighthouse)

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
