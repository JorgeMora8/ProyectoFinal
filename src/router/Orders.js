import {Router} from "express"
import { 
    getOrders, 
    postOrders
} from "../controllers/OrdersControllers.js"
import { authorizedUser } from "../AuthJWT/MiddlewareJWT.js"



const OrderRouters = Router()

OrderRouters.get("/",await authorizedUser, getOrders)
OrderRouters.post("/",await authorizedUser, postOrders)


export { 
    OrderRouters
}