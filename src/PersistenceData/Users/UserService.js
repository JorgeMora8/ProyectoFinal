import User from "./Users.js";
import UserRepository from "./UserRepository.js";
import createId from "../../resources/getId.js";
import { userDAO } from "../../containers/DAO.js";
import uniqueUser from "../../resources/CheckUniqueUser.js"
import jwt from "jsonwebtoken"
import { cartDAO } from "../../containers/DAO.js";
import Cart from "../Cart/Cart.js";
import createToken from "../../AuthJWT/CreateToken.js";
import createUser from "./Resources/CreateUser.js";
import createCart from "../Cart/Resources/CreateCart.js";
import CartService from "../Cart/CartService.js";
import { cartService } from "../Cart/CartInstance.js";

export default class UserService { 
    constructor() { 
        this.repository = new UserRepository(userDAO)
    }

    async saveUser(data) { 
        let userAvaliable = await uniqueUser(data.email);   
            if (userAvaliable){
                try{
                    const userCreated = await createUser(data)
                    await this.repository.save(userCreated)
                    await cartService.save(data.email)
                    
                    let token = await createToken(data.email)
                    return token

                }catch(error){ 
                    console.log(`There was an error ${error}`)
        }}else{ 
                throw new Error `The user with the email ${data["username"]} is in use...`
    }
}

    async getAllUsers(){ 
        const usersSaved = await this.repository.get()
            return usersSaved.map(user => awaituser.asDTO())
    }

    async getUserById(idUser){ 
        try { 
            const userFound = await this.repository.getById(idUser)
            return userFound
        } catch(error) { 
            console.log(`There was an error in the program: ${error}`)
        }
    }

    async getUserByEmail(email){ 
        try{ 
            const findUser = await this.repository.getByEmail(email)
            return findUser
        }catch(error){ 
            throw new Error("There was an error")
        }
    }

}