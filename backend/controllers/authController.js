import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import { handleError } from '../middlewares/errorMiddleware.js'

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body

    if(!username || !email || !password | username==='' ||email==='' || password===''){
        //return res.status(400).json({message: 'All fields are required!'})
        next(handleError(400, 'All fields are required!'))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()
        res.status(201).json('Signedup successfully')
    } catch (err) {
        //res.status(500).json({Error: err.message})
        next(err)
    }

}