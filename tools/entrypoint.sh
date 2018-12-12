#!/bin/sh

[ "$NODE_ENV" = "development" ] &&\
npm run build && npm run test && npm run nodemon-watch
[ "$NODE_ENV" = "production" ] && node /opt/app/build/dist/src/main.js
