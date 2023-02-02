import User from "../Users.js";
import createId from "../../../resources/getId.js";
import { encryptPassword } from "../../../AuthJWT/bcryptFunctions/bcryptFunction.js";


export default async function createUser(userData){ 

    if(!userData.password) throw new Error("Password required")
    const passwordHashed = await encryptPassword(userData.password)
    const userCreated = new User({
        name: userData.name, 
        lastName: userData.lastName, 
        email: userData.email, 
        id: createId(), 
        image: userData.image, 
        password: passwordHashed, 
        admin: userData.admin
    })
    return userCreated

}