import jwt from "jsonwebtoken";
import {userService} from "../PersistenceData/Users/UserInstance.js" 
import { SECRET_WORD } from "../configuration/EnviromentVariables.js";

export async function authorizedUser(req, res, next) { 
    const token = req.headers["access-token"]
    if(!token) res.status(401).json({Error:"Login or signin first before usign the app"})
    else{

    try{   
        const decodedData = jwt.verify(token, SECRET_WORD)
        const userData = await userService.getUserByEmail(decodedData.email)
        req.user = userData
        next()

    }catch(error){
        res.status(400).json({Error:`${error}`})
    }
} 
}