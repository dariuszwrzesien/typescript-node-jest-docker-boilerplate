import { Config } from './shared/config';

async function main() {

    // const production = process.env.ENVIRONMENT === 'production';
    // if(!production) {
    //     const chokidar = require('chokidar');
    //     const watcher = chokidar.watch('./build/dist');
    //     watcher.on('ready', () => {
    //         watcher.on('all', () => {
    //             console.info("Clearing build/dist/ module cache from server");
    //             Object.keys(require.cache).forEach(function(id) {
    //                 if (/[\/\\]build[\/\\]dist[\/\\]/.test(id)) delete require.cache[id]
    //             })
    //         })
    //     })
    // }

    console.log('123asd');
    console.log(Config.TEST);
}

main().then(() => console.log('123')).catch(err => {console.log(err)});
