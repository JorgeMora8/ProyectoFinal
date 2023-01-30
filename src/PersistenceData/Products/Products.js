//Products

import { 
    validateName, 
    validateId, 
    validateDescription, 
    validatePrice, 
    validateImage
} from "./Validations/ValidateProducts.js"

export default class Products { 
    #id
    #name
    #description
    #price
    #image

    constructor({ id, name, description, price, image}){ 
        this.#id = validateId(id)
        this.#name = validateName(name)
        this.#description = validateDescription(description)
        this.#price = validatePrice(price)
        this.#image = validateImage(image)
    }

    asDTO(){ 
        return Object.freeze({ 
            id : this.#id, 
            name : this.#name, 
            description : this.#description, 
            price: this.#price, 
            image: this.#image
        })
    }
}