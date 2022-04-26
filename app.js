import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import jwt from 'jsonwebtoken'

// Import Routers
import AuthRoutes from './src/routes/auth.js'

// Models
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

// Express Middlewares
app.use(express.json())

// Socket.io Middlewares
io.use(AuthModel.tokenVerifyCallbackIO).on('connection', function (socket) {
    console.log('Hola!')
})

// Express Routes
app.use('/auth', AuthRoutes)

httpServer.listen(PORT)
