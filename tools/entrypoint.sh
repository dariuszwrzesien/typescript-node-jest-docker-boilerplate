#!/bin/sh

[ "$NODE_ENV" = "development" ] &&\
npm run build && npm run test && npm run node:watch
[ "$NODE_ENV" = "production" ] && node /opt/app/build/dist/src/main.js
