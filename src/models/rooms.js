class Rooms {
    static rooms = []

    static getRooms = () => rooms

    static joinRoom = (socket, roomID, userID) => {
        // El usuario solo puede estar en una sala a la vez
        this.forceLeaveRoom(socket, userID)

        let roomIndex = this.rooms.findIndex((room) => room.id === roomID)

        if (roomIndex === undefined) {
            // Si la sala no existe, crearla
            this.rooms.push({
                id,
                owner: userID,
                users: [userID]
            })
        } else if (
            this.rooms[roomIndex].users.find((user) => user === userID)
        ) {
            // Si el usuario ya esta en la sala, no continuar
            return
        } else {
            // Añadir usuario a la sala
            this.rooms[roomIndex].users.push(userID)
        }

        socket.join(roomID)
    }

    static leaveRoom = (socket, roomID, userID) => {
        let roomIndex = this.rooms.findIndex((room) => room.id === roomID)
        let userIndex = this.rooms[roomIndex].users.findIndex(
            (u) => u === userID
        )

        // Elimniar usuario de la sala
        this.rooms[roomIndex].users.splice(userIndex, 1)

        // Si no quedan usuarios, eliminar sala
        if (this.rooms[roomIndex].users.length === 0) {
            this.rooms.splice(roomIndex, 1)
        }

        socket.leave(id)
    }

    static forceLeaveRoom = (socket, userID) => {
        this.rooms.forEach((room) => {
            if (room.users.find((user) => user === userID)) {
                this.leaveRoom(socket, room.id, userID)
                return
            }
        })
    }
}

export default Rooms
