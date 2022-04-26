import { Router } from 'express'

// Models
import AuthModel from './../models/auth.js'

const router = Router()

router.post('/login', async (req, res) => {
    const { userName } = req.body

    if (!userName) {
        res.status(400).json('No se ha entregado un nombre de usuario')
        return
    }

    let token = await AuthModel.login(userName)
    res.json(token)
})

export default router
