import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log(`Successfully connected to MONGODB: `)
}).catch((err) =>{
    console.log(err)
})

const app = express()
const PORT = 3000


app.listen(() => {
    console.log(`Server is running on port ${PORT}`)
})

