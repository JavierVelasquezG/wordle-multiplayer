import express from 'express'

const app = express()

import AuthModel from './models/auth.js'

app.get('/', async (req, res) => {
    let token = await AuthModel.login('Javg')
    res.json(token)
})

app.listen(3000)
