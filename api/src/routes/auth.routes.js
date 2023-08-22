import { Router } from "express";
import User from '../models/user.model.js'
import ContainerMongodb from "../containers/mongo.container.js"
import ControllerAuth from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from '../middlewares/validator.middleware.js'
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router()

const container = new ContainerMongodb(User)
const controller = new ControllerAuth(container)

router.post('/register', validateSchema(registerSchema), controller.register)
router.post('/login', validateSchema(loginSchema), controller.login)
router.post('/logout', controller.logout)
router.get('/profile', authRequired, controller.profile)
router.get('/verify', controller.verifyToken)

export default router