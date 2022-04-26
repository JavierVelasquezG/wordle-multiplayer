import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import jwt from 'jsonwebtoken'

// Models
import GameModel from './src/models/game.js'
import AuthModel from './src/models/auth.js'

// Port
const PORT = 3001 || process.env.PORT

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

// Socket.io Middlewares
io.use(AuthModel.tokenVerifyCallbackIO).on('connection', function (socket) {
    console.log('Hola!')
})

app.get('/', async (req, res) => {
    let token = await AuthModel.login('Javg')
    res.json(token)
})

httpServer.listen(PORT)
