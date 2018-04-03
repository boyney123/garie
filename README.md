![Perfie Logo](./assets/logo.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Perfie is a open source tool for monitoring web performance using promethus and graphna. 

**Highlights**

* Setup everything with one command.
* View web performance metrics over time. 
* Integrated with Lighthouse, Page-speed-insights & Web page test.

## Overview of Perfie

Perfie uses docker to connect multiple environments together to start collecting performance data through multiple tools into one dashboard. 

### Prerequisites

- Docker and Node 8.10.0 or greater.
- [Page speed insights API key](https://developers.google.com/speed/docs/insights/v4/first-app)
- [Lighthouse API key](https://docs.google.com/forms/d/e/1FAIpQLSdIc3QNIMn7bBMgl2cfxmmo6wGBlUpdLGxjB_ml464t9eCg_A/viewform)

### Installing

```
PAGE_SPEED_INSIGHTS_KEY={PAGE_SPEED_INSIGHTS_KEY} LIGHTHOUSE_API_KEY={LIGHTHOUSE_API_KEY} docker-compose up
```

Once docker-compose has complete, go to localhost:3000 to view your dashboard that is already setup and good to go!

### Capturing data

You can capture data anyway you want. You could setup a cron job to hit the application every X amount of times to gather information or a github webhook with any release of your software.

#### Lighthouse

##### GET - `localhost:8080/lighthouse?url={url}&product={product}`

- url - The url to get the performance data for.
- product - The product which is used on the dashboards.

Example: `http://localhost:8080/lighthouse?url=http://www.google.co.uk&product=google`

#### Page speed insights

##### GET - `localhost:8080/page-speed-insights?url={url}&product={product}`

- url - The url to get the performance data for.
- product - The product which is used on the dashboards.

Example: `http://localhost:8080/page-speed-insights?url=http://www.google.co.uk&product=google`

### Viewing dashboards

You can view your dashboards at localhost:3000

