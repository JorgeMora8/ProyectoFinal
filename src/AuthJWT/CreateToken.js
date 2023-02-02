import jwt from "jsonwebtoken"
import { SECRET_WORD } from "../configuration/EnviromentVariables.js"

export default async function createToken(email){ 
    let TokenCreated = await jwt.sign({email}, SECRET_WORD, {
        expiresIn: 60*60*24
    } )
    return TokenCreated
}