import express from 'express'
import { user } from '../controllers/userController.js'

const router = express.Router()

const userRouter = router.get('/getuser', user)

export default userRouter