// const EventEmitter = require('events');

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, id) => {
//     console.log(`data recieved ${name} ${id}`)
// })

// customEmitter.on('response', () => {
//     console.log(`some other logic here `)
// })


// customEmitter.emit(`response`, 'john', 34);




const http = require('http');

const server = http.createServer()
server.on('request', (req,res) => {
    res.end('Welcome');
})
server.listen(8000); 