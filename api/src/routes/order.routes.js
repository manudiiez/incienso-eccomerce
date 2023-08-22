import { Router } from "express"
import Product from '../models/product.model.js'
import Order from '../models/order.model.js'
import ContainerMongodb from "../containers/mongo.container.js"
import ControllerOrder from "../controllers/order.controller.js"

const router = new Router()

const products = new ContainerMongodb(Product)
const contenedor = new ContainerMongodb(Order)
const controller = new ControllerOrder(contenedor, products)

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.save)
router.put('/:id', controller.updateById)


export default router   