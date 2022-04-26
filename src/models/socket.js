import { Server } from 'socket.io'

// Models
import AuthModel from './auth.js'
import RoomsModel from './rooms.js'

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
        socket.on('room:join', ({ id }) => RoomsModel.joinRoom(socket, id, socket.decoded.userID))
        socket.on('room:leave', ({ id }) => RoomsModel.leaveRoom(socket, id, socket.decoded.userID))
        socket.on('disconnect', () => RoomsModel.forceLeaveRoom(socket, socket.decoded.userID))
    }
}

export default Socket
