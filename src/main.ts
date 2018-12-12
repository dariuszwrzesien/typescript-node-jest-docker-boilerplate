import { Config } from './shared/config';

// function watcher() {
//     const production = Config.ENVIRONMENT === 'production';
//     if(!production) {
//         var chokidar = require('chokidar');
//         var watcher = chokidar.watch('./build/dist');
//         watcher.on('ready', function() {
//             watcher.on('all', function() {
//                 console.log("Clearing build/dist/ module cache from server");
//                 Object.keys(require.cache).forEach(function(id) {
//                     console.log(123123);
//                     // if (/[\/\\]build[\/\\]/.test(id)) delete require.cache[id]
//                 })
//             })
//         })
//     }
// }

async function main() {
    // watcher();
    console.log(Config.ENVIRONMENT);
    console.log(Config.TEST);
}

main().catch(err => {console.log(err)});
