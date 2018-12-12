FROM node:10-alpine
RUN apk add tini --no-cache

RUN mkdir -p /opt/app/src
RUN mkdir -p /opt/app/tools

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /opt/app

COPY ./package.json ./package.json

RUN npm install && npm cache clean --force

COPY . .
CMD ["node", "build/dist/src/main.js"]
