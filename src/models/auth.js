import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import { secretKey } from './../config/config.js'

class Auth {
    static login = async (userName) => {
        let generatedID = uuid()
        return await jwt.sign({ userName: userName, userID: generatedID }, secretKey)
    }
}

export default Auth
