import mongoose from "mongoose";

const connectDB = async(url) => {
    try {
        const conn = await mongoose.connect(url)
        console.log(`Server connected successfully to ${conn.connection.host}`)
        
    } catch (err) {
        console.error(`Error: ${err.message}`)
    }
}

export default connectDB