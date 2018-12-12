import { Config } from './shared/config';

async function main() {
    console.log(Config.ENVIRONMENT);
    console.log(Config.TEST);
}

main().catch(err => {console.log(err)});
