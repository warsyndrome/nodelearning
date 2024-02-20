const { readFile, writeFile } = require('fs').promises
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./fist.txt', 'utf8')
        await writeFile('./ASyncandstync/content/result-sync.txt', `this is awesome : ${first} `, {flag : 'a'})
        console.log(first);
    } catch {
        console.log(err);
    }

}

start()






// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./fist.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// getText('./ASyncandstync/content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err)); 