const http = require('http')
const { processenv } = require('processenv')

const port = processenv('PORT', 3333)
const message = processenv('MESSAGE', 'Here can be your advertisement...')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(message)
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})