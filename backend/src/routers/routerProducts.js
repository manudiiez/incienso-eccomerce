import { Router } from "express"
import ContainerMongodb from "../containers/ContainerMongodb.js"
import ControllerProducts from "../controllers/controllerProducts.js"
import Product from "../models/Product.js"
import { isAuthenticated } from "../utils/authenticated.js"

const routerProducts = new Router()

const contenedor = new ContainerMongodb(Product)
const controller = new ControllerProducts(contenedor)

routerProducts.get('/', controller.getAll)
routerProducts.get('/:id', controller.getById)
routerProducts.post('/', isAuthenticated, controller.save)
routerProducts.put('/:id', isAuthenticated, controller.updateById)
// routerProducts.put('/', controller.updateAll)
routerProducts.delete('/:id', isAuthenticated, controller.deleteById)

export default routerProducts   
