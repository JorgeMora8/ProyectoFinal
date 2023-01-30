import { cartDAO } from "../containers/DAO.js"
import { cartService } from "../PersistenceData/Cart/CartInstance.js"
import {sendEmail} from "../NodeMailer/gmail.js"
import { loggerInfo } from "../loggers/loggers.js"

async function getOrders(req, res) { 
    let userCar = await cartService.getCartById(req.user.email)
    
    res.status(200).json({
        User: req.user, 
        Products_in_car: userCar
    })
}

async function postOrders(req, res) { 
    let ProductsInCar = await cartService.getCartById(req.user.email)
    let ProductsQuanity = ProductsInCar["products"]
    let userEmail = req.user.email
    
    if(ProductsQuanity == 0) { 
        res.status(400).send({Message:"The car is empty. Please add products in the car so you can make a purchase... "})
    }else{ 
        res.status(201).json({Success:"the purchase has been made successfully"})
        await sendEmail(req.user.email, ProductsInCar["products"])
        await cartDAO.deleteAllCarProducts(userEmail)}
        loggerInfo.info(`Compra realizada. Hora:${Date()}`)
}

export { 
    getOrders, 
    postOrders
}