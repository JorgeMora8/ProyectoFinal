import Products from "../PersistenceData/Products/Products.js";
import createId from "./getId.js";

export default function createProduct({name, price, description, image}) { 
    const newProduct = new Products({
        name: name, 
        price: price, 
        description: description, 
        image: image, 
        id: createId()
    })

    return newProduct
}