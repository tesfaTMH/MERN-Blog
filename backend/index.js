import express from 'express'
import connectDB from '../backend/db/config.js'
import dotenv from 'dotenv'

import userRouter from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

// Error middlewar
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

dotenv.config()

connectDB(process.env.MONGODB_URI)
const app = express()
const PORT = 3000;

// builtin middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)


app.use(notFound)
app.use(errorHandler)

//app.use((err, req, res, next))


app.listen(PORT, () => {
    console.log('Running')
})