import express from "express"
import {SERVER_PORT} from "../configuration/ConfigFile.js"
import * as dotenv from 'dotenv'
import path from "path";
dotenv.config()

//Routers import
import { ProdsRouter } from "../router/Products.js"; 
import { carRouter } from "../router/Carts.js";
import { OrderRouters} from "../router/Orders.js"
import { userRouter } from "../router/User.js";
import { pageNotFound } from "../controllers/PageNotFound.js";
import { userAuthentication } from "../controllers/authentication.js";

export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/products", ProdsRouter)
app.use("/api/shoppingcartproducts", carRouter)
app.use("/api/orders", OrderRouters)
app.use("/api/users", userRouter)
app.post("/login", userAuthentication)
app.get("*", pageNotFound);
app.post("*", pageNotFound);