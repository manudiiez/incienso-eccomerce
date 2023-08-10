import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const MONGO_URI = process.env.MONGO_URI
export const SECRET_KEY = process.env.SECRET_KEY
export const MONGO_SESSION = process.env.MONGO_SESSION
