const fs = require('fs')
const express = require('express')
const path = require('path')
const server = express()

server.use('/_assets', express.static(path.join(__dirname, './dist/_assets')))

server.get('*', (req, res) => {
  res.end(fs.readFileSync(path.join(__dirname, './dist/index.html')).toString())
})

console.log('started server...')
server.listen(8080)
