const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcomw to our home page')
    }
    if (req.url === '/about') {
        res.end('here is our about page.')
    }
    res.end(`
    <h1>OOPs</h1>
    <a href="/"> back home</a>
    `);
});

server.listen(8000); 