import { userService } from "../PersistenceData/Users/UserInstance.js"


export function checkProductValues({name, price, description, image}) { 
    if(!name) throw new Error("Name missing to update the product")
    if(!price) throw new Error("price missing to update the product")
    if(!description) throw new Error("description missing to update the product")
    if(!image) throw new Error("image missing to update the product")
}

export async function checkUserValues({name, lastName, image, email, password, role}){ 

    if(!name) throw new Error("Name missing to save the user")
    if(!lastName) throw new Error("lastName missing to save the user")
    if(!image) throw new Error("image missing to save the user")
    if(!email) throw new Error("email missing to save the user")
    if(!password) throw new Error("password missing to save the usert")
    if(role === null || undefined) throw new Error("Role missing to save the user")

    let userFound = await userService.getUserByEmail(email)
    if(userFound === null){
        return true
    } else { 
        throw new Error("Email already in use... ")
    }
}


