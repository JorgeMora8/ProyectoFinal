import { userDAO } from "../containers/DAO.js";

export default async function uniqueUser(email){ 
    let exitsUser = await userDAO.getByName(email)
    if (exitsUser === null) return true   
    return false
}

