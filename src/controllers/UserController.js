import { userService } from "../PersistenceData/Users/UserInstance.js"
import authenticatedUser from "../AuthJWT/AuthenticateUser.js"
import createToken from "../AuthJWT/CreateToken.js"
import { loggerInfo } from "../loggers/loggers.js"

export async function saveUser({body}, res){ 
    try{ 
        let userNewToken = await userService.saveUser(body)
        res.status(201).json({Auth_True:userNewToken})
        
    }catch(error){ 
       res.status(400).send(`${error}`)
    }
}

export async function infoAboutUser(req, res) { 

    try{
    res.json({User_information: {
        name: req.user.name,
        lastName: req.user.lastName,
        email: req.user.email,
        image: req.user.image,
    }})
}   catch(error){ 
    res.status(400).json({Error:`${error}`})
}}

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