#!/usr/bin/env bash

# Required for garie-browsertime (needs to know where to map reports back too as its docker in docker...)
REPORT_DIR=$(pwd)/plugins/garie-browsertime PAGESPEED_INSIGHTS_KEY=YOUR_KEY docker-compose up
