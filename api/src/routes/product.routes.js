import { Router } from "express"
import Product from '../models/product.model.js'
import ContainerMongodb from "../containers/mongo.container.js"
import ControllerProduct from "../controllers/product.controller.js"
import { createProductSchema } from "../schemas/product.schema.js"
import { validateSchema } from "../middlewares/validator.middleware.js"
import { authRequired } from "../middlewares/validateToken.js";

const router = new Router()

const container = new ContainerMongodb(Product)
const controller = new ControllerProduct(container)

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', validateSchema(createProductSchema), controller.save)
router.post('/image', controller.uploadImage)
router.put('/:id', authRequired, controller.updateById)
router.delete('/:id', controller.deleteById)

export default router   
