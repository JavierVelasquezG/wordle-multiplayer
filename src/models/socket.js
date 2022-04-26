import { Server } from 'socket.io'

// Auth Model
import AuthModel from './auth.js'

class Socket {
    constructor(httpServer, origin) {
        this.io = new Server(httpServer, {
            cors: { origin }
        })

        // Token verification middleware
        this.io.use(AuthModel.tokenVerifyCallbackIO)
        // Connection handler
        this.io.on('connection', this.onConnection)
    }

    onConnection = (socket) => {
        console.log('Usuario conectado')
    }
}

export default Socket
