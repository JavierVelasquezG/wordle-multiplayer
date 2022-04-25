import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import GameModel from './src/models/game.js'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.get('/', (req, res) => {

})

httpServer.listen(3000)