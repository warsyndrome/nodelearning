const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `here is the result : ${first}, ${second}`, 
        (err, result) => {
            if(err){
                return;

            }
            console.log(result);
        });
    })
});

// Async patterns

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Home Page"); 
//     }
//     if (req.url === '/about') {
//         for(let i = 0; i < 1000; i++){
//             for(let j = 0; j<1000; j++){
//                 console.log(`${i},${j}`)
//             }
//         }
        
        
//         res.end('About Page');
//     }

//     res.end('Error Page');
// });

// server.listen(5000, () => {
//     console.log("Server Listening on port 5000....");
// });

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Home Page");
//     }
//     if (req.url === '/about') {
//         // Simulate a long-running asynchronous operation
//         simulateHeavyTask(() => {
//             res.end('About Page');
//         });
//     } else {
//         res.end('Error Page');
//     }
// });

// server.listen(5000, () => {
//     console.log("Server Listening on port 5000....");
// });

// // Function to simulate a heavy asynchronous task
// function simulateHeavyTask(callback) {
//     setTimeout(callback, 1000); // Simulating a 1-second delay
// }
