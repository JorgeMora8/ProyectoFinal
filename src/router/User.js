import { Router } from "express";
import { saveUser, infoAboutUser} from "../controllers/UserController.js"
import {authorizedUser} from "../AuthJWT/MiddlewareJWT.js"

const userRouter = Router()

userRouter.post("/", await saveUser)
userRouter.get("/", await authorizedUser,await infoAboutUser)

export { userRouter }