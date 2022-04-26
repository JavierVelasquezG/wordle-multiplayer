class Rooms {
    static rooms = []

    static joinRoom = (socket, id, owner = null) => {
        if (!this.rooms.find((r) => r.id === id)) {
            this.rooms.push({
                id,
                owner
            })
        }

        socket.join(id)
    }
}

export default Rooms