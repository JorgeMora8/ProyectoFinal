import { userService } from "../PersistenceData/Users/UserInstance.js"
import jwt from "jsonwebtoken"
import authenticatedUser from "../AuthJWT/AuthenticateUser.js"
import createToken from "../AuthJWT/CreateToken.js"
import { loggerInfo } from "../loggers/loggers.js"
import {checkAllValues, checkAllValuesUser} from "../resources/checkAllValues.js"

export async function saveUser({body}, res){ 
    try{ 
        await checkAllValuesUser(body)
        let userNewToken = await userService.saveUser(body)

        res.status(201).json({Auth_True:userNewToken})
        loggerInfo.info(`User created. New user:${body.email}`) 
    }catch(error){ 
       res.status(400).send(`${error}`)
    }
}

export async function infoAboutUser(req, res) { 
    const userToken = req.headers["access-token"]

    if (!userToken){ 
        return res.status(401).json({ 
            auth:false, 
            message:"No token provider, please register before enter"
        })
    }

    try{
    let userInfo = jwt.verify(userToken, "secretWord")
    let userFound = await userService.getUserByEmail(userInfo.email)

    res.json({User_information: {
        name: userFound["name"],
        lastName: userFound["lastName"],
        email: userFound["email"],
        image: userFound["image"],
    }})
}   catch(error){ 
    res.status(400).json({Error:"The token is invalid"})
}
}

export async function signInUser(req, res) { 

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