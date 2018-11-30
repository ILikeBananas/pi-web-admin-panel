const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 8080

app.use('/', express.static('./client/dist'));

io.on('connection', (socket) => {
  console.log("client connected")
})

http.listen(port, () => {
  console.log("listening on port " + port)
})
