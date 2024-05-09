import express from 'express'
import connectDB from '../backend/db/config.js'
import dotenv from 'dotenv'

import userRouter from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

dotenv.config()

connectDB(process.env.MONGODB_URI)
const app = express()
const PORT = 3000;

// builtin middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)


app.listen(PORT, () => {
    console.log('Running')
})