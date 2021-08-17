import jwt from 'jsonwebtoken'

import User from '../users/users.models'
import config from '../../config'

export const signIn = async (data) => {
    const { email, password } = data
    const userFound = await User.findOne({email: email})

    if(!userFound) return null

    const matchPass = await User.comparePassword(password, userFound.password)

    if(!matchPass) return null
    const days = 86400*7
    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: days
    })

    return({token, userFound})
}