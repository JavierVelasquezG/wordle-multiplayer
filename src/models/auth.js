import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

// Config
import { secretKey } from './../config/config.js'

class Auth {
    static login = async (userName) => {
        let generatedID = uuid()
        return await jwt.sign(
            { userName: userName, userID: generatedID },
            secretKey
        )
    }

    static tokenVerifyCallbackIO = (socket, next) => {
        if (socket.handshake.auth && socket.handshake.auth.token) {
            jwt.verify(
                socket.handshake.auth.token,
                secretKey,
                (err, decoded) => {
                    if (err) {
                        return next(new Error('Authentication error'))
                    }
                    socket.decoded = decoded
                    next()
                }
            )
        } else {
            next(new Error('Authentication error'))
        }
    }
}

export default Auth
