import authenticatedUser from "../AuthJWT/AuthenticateUser.js"
import createToken from "../AuthJWT/CreateToken.js"
import { loggerInfo } from "../loggers/loggers.js"

export async function userAuthentication(req, res){ 
    let {email, password} = req.body
    if(!email || !password) {
        res.status(404).json({Error:"email or password missing"})
        return
    }

    try{
        await authenticatedUser(email, password)
        let token = await createToken(email)
        loggerInfo.info(`Signed user:${req.body.email}`) 
        res.status(200).json({Auth_correct: token})
    }catch(error){ 
        res.status(400).json({Method_not_allowed:`${error}`})
    }
}