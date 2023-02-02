import {Router} from "express"
import { authorizedUser } from "../AuthJWT/MiddlewareJWT.js"

import {
    addProductsInCart,
    getProductInCart, 
    deleteProductInCar
} from "../controllers/CartsControllers.js"

export const carRouter = Router()

carRouter.get("/", await authorizedUser,await getProductInCart)
carRouter.post("/",await authorizedUser, await addProductsInCart)
carRouter.delete("/:id",await authorizedUser, await deleteProductInCar)

