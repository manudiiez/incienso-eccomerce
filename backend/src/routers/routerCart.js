import { Router } from "express"
import Product from "../models/Product.js"
import ContainerMongodb from "../containers/ContainerMongodb.js"
import ControllerCart from "../controllers/controllerCart.js"

const routerCart = new Router()

const contenedor = new ContainerMongodb(Product)
const controller = new ControllerCart(contenedor)

routerCart.post('/', controller.getTotalPrice)


export default routerCart   
