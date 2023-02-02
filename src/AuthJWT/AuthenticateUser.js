import { userService } from "../PersistenceData/Users/UserInstance.js"
import { comparePassword } from "./bcryptFunctions/bcryptFunction.js"

export default async function authenticatedUser(email, password){ 
    let userFound = await userService.getUserByEmail(email)
    if(userFound == null) throw new Error("User not found. Please log in... ")
    let passwordState = await comparePassword(password, userFound.password)

    if (passwordState == false) throw new Error("Incorrect password")
    return userFound
}