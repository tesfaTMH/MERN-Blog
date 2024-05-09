import express from 'express'
import { signup } from '../controllers/authController.js'

const router = express.Router()

const authRoute = router.post('/signup', signup)

export default authRoute