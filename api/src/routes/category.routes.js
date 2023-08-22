import { Router } from "express";
import ContainerMongodb from "../containers/mongo.container.js";
import ControllerCategory from "../controllers/category.controller.js";
import Category from "../models/category.model.js";


const router = Router()

const container = new ContainerMongodb(Category)
const controller = new ControllerCategory(container)

router.get('/', controller.getAll)
router.post('/', controller.save)
router.delete('/:id', controller.deleteById)

export default router