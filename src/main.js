"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./shared/config");
async function main() {
    console.log(config_1.Config.ENVIRONMENT);
    console.log(config_1.Config.TEST);
}
main().catch(err => { console.log(err); });
//# sourceMappingURL=main.js.map