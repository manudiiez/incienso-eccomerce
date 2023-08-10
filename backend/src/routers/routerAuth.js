import { Router } from "express"
import ContainerMongodb from "../containers/ContainerMongodb.js"
import ControllerAuth from "../controllers/controllerAuth.js"
import User from '../models/User.js'
import { isAuthenticated } from "../utils/authenticated.js"

const routerAuth = new Router()

const contenedor = new ContainerMongodb(User)
const controller = new ControllerAuth(contenedor)

routerAuth.post('/signup', controller.signup)
routerAuth.post('/login', controller.login)
routerAuth.post('/verify', controller.login2)
routerAuth.get('/', isAuthenticated, (req, res) => {
    res.status(200).json(req.session.user)
})
routerAuth.get('/logout', isAuthenticated, (req, res) => {
    req.session.destroy()
    res.status(200).json({data: "session cerrada"})
})


export default routerAuth   
