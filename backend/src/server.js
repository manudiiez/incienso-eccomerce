// EXPRESS
import express from 'express'
// DOTENV
import dotenv from 'dotenv'
// MONGODB
import mongoose from "mongoose"
import MongoStore from 'connect-mongo'
// SESSION
import session from 'express-session'
// CORS
import cors from 'cors'
// IMPORTS
import { MONGO_SESSION, MONGO_URI, PORT, SECRET_KEY } from './config.js'
import routerAuth from './routers/routerAuth.js'
import routerProducts from './routers/routerProducts.js'
import routerCart from './routers/routerCart.js'

const app = express()
dotenv.config()


/* ---------------------------- MONGO CONNECTION ---------------------------- */
const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error;
    }
}

// Si esta desconectada devuelve
mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!!')
})
// Si esta conectada devuelve
mongoose.connection.on('connected', () => {
    console.log('mongoDB connected!!')
})



/* ------------------------------- MIDDLEWARES ------------------------------ */
const corsOptions = {
    optionsSuccessStatus: 200,
    credentials: true,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    store: MongoStore.create({ mongoUrl: MONGO_SESSION }),
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))
/* --------------------------------- ROUTES --------------------------------- */
app.use('/api/auth', routerAuth)
app.use('/api/products', routerProducts)
app.use('/api/cart', routerCart)
/* --------------------------------- SERVER --------------------------------- */
const server = app.listen(PORT || 8080, () => {
    connect()
    console.log(`Aplicacion en el puerto: ${server.address().port}`)
})  