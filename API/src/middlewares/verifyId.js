import mongoose from 'mongoose'
const objectId = mongoose.Types.ObjectId

export const verifyId = async (req, res, next) => {
    const id = req.params.id
    if(!objectId.isValid(id)) return res.status(400).json({message: 'Invalid ID'})
    next()
}

