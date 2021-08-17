import User from './users.models'

export const createUser = async (data) => {
    const {name, lastname, email, password} = data
    const newUser = new User({
        name,
        lastname,
        email,
        password: await User.encryptPassword(password)
    })
    const user =  await newUser.save()
    return user
}

export const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id)
    return user  
}

export const updateUser = async (id, data) => {
    const {name, lastname, email} = data
    const newUser = {
        name,
        lastname,
        email
    }
    const user = User.findByIdAndUpdate(id, newUser, {
        new: true
    })
    return user    
}