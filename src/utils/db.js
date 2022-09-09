import mongoose from 'mongoose'

const connectDb = () => mongoose.connect(process.env.MONGO_URI)

export default connectDb
