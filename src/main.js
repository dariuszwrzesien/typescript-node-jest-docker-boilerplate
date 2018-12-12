"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./shared/config");
async function main() {
    console.log(config_1.Config.GIS_DATA.dir);
}
main().catch(err => { console.log(err); });
