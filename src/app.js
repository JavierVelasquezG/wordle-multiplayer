import express from 'express'

const app = express()

import GameModel from './models/game.js'

app.get('/', (req, res) => {
    GameModel.checkWord()
})

app.listen(3000)
