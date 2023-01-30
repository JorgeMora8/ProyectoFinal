import {cartService} from "../PersistenceData/Cart/CartInstance.js"
import { productService } from "../PersistenceData/Products/ProductInstance.js";

export async function getProductInCart(req, res){ 
    let productsSaved = await cartService.getCartById(req.user.email)
    res.send(productsSaved)
}

export async function addProductsInCart(req, res) { 
    let userData = req.user; 
    let productID = req.body.id

    
        
    

    try {

        if(!productID) throw new Error(`Product ID missing`)
        let cartFound = await cartService.getCartById(userData.email)
        let productFound = await productService.getProductById(productID)

        await cartService.saveProductInCar(userData.email, productFound)
        res.status(201).json({Success:"The product was added in your car... "})
    } catch (error) {
        res.status(400).json({Mesage: `${error}`})
    }
}

export async function deleteProductInCar(req, res) { 
    let productID = req.params.id
    let carId = req.user.email

    console.log(req.user.email)
    

    try{
        await cartService.deleteProductInCar(carId, productID)
        res.status(201).json({Success:"Product delete it "})
    }catch(error){ 
        res.status(400).json({Error:`${error}`})
    }
}