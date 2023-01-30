//Users
import { encryptPassword } from "../../AuthJWT/bcryptFunctions/bcryptFunction.js"

import { 
    validateId, 
    validateEmail, 
    validatePassword, 
    validateName, 
    validateLastName,
    validateUrl
} from "./Validations/ValidateUser.js"

export default class User { 
    #id 
    #email 
    #password 
    #name
    #lastname 
    #image
    #role

    constructor({id, email, password, name, lastName, image, role}){ 
        this.#id = id
        this.#email = validateEmail(email)
        this.#password = validatePassword(password)
        this.#name = validateName(name)
        this.#lastname = validateLastName(lastName)
        this.#image = validateUrl(image)
        this.#role = role

    }

     asDTO(){ 
        return Object.freeze({
            id: this.#id, 
            name : this.#name,
            lastName : this.#lastname, 
            email : this.#email, 
            password : this.#password, 
            image: this.#image, 
            role:this.#role

        })
    }
}