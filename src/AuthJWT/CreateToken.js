import jwt from "jsonwebtoken"

export default async function createToken(email){ 
    let TokenCreated = await jwt.sign({email}, "secretWord", {
        expiresIn: 60*60*24
    } )
    return TokenCreated
}