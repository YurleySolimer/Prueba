import { Router } from 'express'
const router = Router()

import * as authCtrl from "./auth.controller"

router.post('/signin', async (req, res) => {
    try {
        const user = await authCtrl.signIn(req.body)
        if (user) res.status(201).json({ token: user.token, user: user.userFound._id })
        res.status(400).json({message: 'User or password invalid'})
      } catch (err) {
        console.log(err)
    }
})

export default router;