import {cartService} from "../PersistenceData/Cart/CartInstance.js"

export async function getProductInCart(req, res){
    try{
        let productsSaved = await cartService.getCartById(req.user.email)
        res.send(productsSaved)
    }catch(error){ 
        res.status(400).json({Error:`There was an error: ${error}`})
    }
}

export async function addProductsInCart(req, res) { 
    try {
        await cartService.saveProductInCar(req.user.email, req.body.id)
        res.status(201).json({Success:"The product was added in your car... "})
    } catch (error) {
        res.status(400).json({Mesage: `${error}`})
    }
}

export async function deleteProductInCar(req, res) { 
    try{
        await cartService.deleteProductInCar(req.user.email, req.params.id)
        res.status(200).json({Success:"Product delete it "})
    }catch(error){ 
        res.status(400).json({Error:`${error}`})
    }
}