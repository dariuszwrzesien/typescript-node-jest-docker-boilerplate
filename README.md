# Typescript-Node-Jest-Docker Boilerplate

[![](https://img.shields.io/github/downloads/dariuszwrzesien/typescript-node-jest-docker-boilerplate/total.svg)](https://github.com/dariuszwrzesien/typescript-node-jest-docker-boilerplate)

## Docker start
1. Create file `docker/.env` from `.env.template`
2. Create docker network: `docker network create app_network`
3. In root directory type command: `docker-compose up`

That's all, now your instance is working :)

### Compilation
1. In order to re-compile after code change:
    - <strong>Webstorm / IntelliJ:</strong>
     `File -> Settings -> Languages & Frmaeworks -> Typescript -> Recompile on changes`
    - <strong>VSC</strong> or <strong>Atom:</strong>
    There is already set variable `"compileOnSave": true` in tsconfig.json/tsconfig.release.json which is responsible for handling `onSave` signal from the IDE.
    
2. IMPORTANT! Make sure you have read/write privileges to build/dist directory.
