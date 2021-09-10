const PORT = 4000
const loginUser = 'Admin'
const passwordUser = '12345678'

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    console.log('server request');
    res.setHeader('Content-Type', 'application/json')
    const data = JSON.stringify({
        auth: true
    })
    res.end(data)
})



server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})