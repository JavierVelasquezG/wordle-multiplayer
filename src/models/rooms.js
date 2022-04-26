class Rooms {
    static rooms = []

    static joinRoom = (socket, id, user) => {
        if (!this.rooms.find((r) => r.id === id)) {
            this.rooms.push({
                id,
                owner: user,
                users: [user]
            })
        } else if (
            this.rooms.find((r) => r.id === id).users.find((u) => u === user)
        ) {
            return
        } else {
            this.rooms.find((r) => r.id === id).users.push(user)
        }

        socket.join(id)
    }

    static leaveRoom = (socket, id, user) => {
        let userIndex = this.rooms
            .find((r) => r.id === id)
            .users.findIndex((u) => u === user)

        this.rooms.find((r) => r.id === id).users.splice(userIndex, 1)

        if (this.rooms.find((r) => r.id === id).users.length === 0) {
            let roomIndex = this.rooms.findIndex((r) => r.id === id)

            this.rooms.splice(roomIndex, 1)
        }

        socket.leave(id)
    }

    static forceLeaveRoom = (socket, user) => {
        this.rooms.forEach((room) => {
            if (room.users.find((u) => u === user)) {
                this.leaveRoom(socket, room.id, user)
                return
            }
        })
    }
}

export default Rooms
