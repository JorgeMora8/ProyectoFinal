import {Router} from "express"
import { 
    getProducts, 
    getOneProduct, 
    addOneProduct, 
    updateOneProduct, 
    deleteOneProduct
} from "../controllers/ProductsController.js"
import { authorizedUser } from "../AuthJWT/MiddlewareJWT.js"
import adminMiddleware from "../AuthJWT/adminMiddleware.js"


const ProdsRouter = Router()

ProdsRouter.get("/" ,await getProducts)
ProdsRouter.get("/:id",await getOneProduct)
ProdsRouter.post("/", await authorizedUser, await adminMiddleware, addOneProduct)
ProdsRouter.put("/:id", await authorizedUser, await adminMiddleware, await updateOneProduct)
ProdsRouter.delete("/:id", await authorizedUser, await adminMiddleware, await deleteOneProduct)


export {
    ProdsRouter
}