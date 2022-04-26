import express from 'express'
import http from 'http'

// Import Routers
import AuthRoutes from './src/routes/auth.js'

// Models
import SocketModel from './src/models/socket.js'

// Port
const PORT = 3001 || process.env.PORT

const app = express()
const httpServer = http.createServer(app)

// Express Middlewares
app.use(express.json())

// Socket.io instance
const io = new SocketModel(httpServer, 'http://localhost:3000')

// Express Routes
app.use('/auth', AuthRoutes)

httpServer.listen(PORT)
