import UserRepository from "./UserRepository.js";
import { userDAO } from "../../containers/DAO.js";
import uniqueUser from "../../resources/CheckUniqueUser.js"
import createToken from "../../AuthJWT/CreateToken.js";
import createUser from "./Resources/CreateUser.js";
import { cartService } from "../Cart/CartInstance.js";
import { checkUserValues } from "../../resources/checkAllValues.js";

export default class UserService { 
    constructor() { 
        this.repository = new UserRepository(userDAO)
    }

    async saveUser(data) { 
        await checkUserValues(data)
        let userAvaliable = await uniqueUser(data.email);   
            if (userAvaliable){
                const userCreated = await createUser(data)
                await this.repository.save(userCreated)
                await cartService.createCar(data.email)
                    
                return await createToken(data.email)
            
            } else throw new Error `The user with the email ${data["username"]} is in use...`
        
        }

    async getUserById(idUser){  
            return await this.repository.getById(idUser)

    }

    async getUserByEmail(email){ 
        return await this.repository.getByEmail(email) 
    }

}