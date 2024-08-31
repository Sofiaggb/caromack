import { Router } from "express";
import controllers from "../controllers/productController.js";

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/product/:id', controllers.getProduct)
router.get('/search/:search', controllers.search );

router.post('/save', controllers.save)

router.put('/product/:id', controllers.update)

router.delete('/product/:id', controllers.delete)

export default router
