import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import endpoint from '../constants'

const useSocket = (token) => {
    const [socket] = useState(
        io(endpoint, {
            autoConnect: false,
            multiplex: false,
            auth: {
                token
            }
        })
    )
    
    useEffect(() => {
        socket.on('connect_error', (err) => {
            console.log(err.message)
        })

        socket.on('connect', () => {
            console.log('Conectado')
        })

        socket.open()
    }, [token, socket])

    return socket
}

export default useSocket
