import { userDAO } from "../containers/DAO.js";

export default async function uniqueUser(email){ 
    
    let exitsUser = await userDAO.getByName(email)
    
    //Si no encuentra un usuario con este nombre. Retorna true 
    if (exitsUser === null) return true
    
    return false

}

