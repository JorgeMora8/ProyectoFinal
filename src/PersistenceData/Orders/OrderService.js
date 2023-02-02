import order from "./Order.js"
import OrderRepository from "./OrderRepository.js"
import {orderDAO} from "../../containers/DAO.js"
import { cartService } from "../Cart/CartInstance.js"

import { sendEmail } from "../../NodeMailer/gmail.js"


export default class OrderService { 
    constructor(){ 
        this.repository = new OrderRepository(orderDAO)
    }

    async saveOrder(clientID, userEmail){   
        const ProductInCar = await cartService.getCartById(userEmail)
        const ProductList = ProductInCar["products"]

        const newOrderToSave = new order(ProductList, clientID)
        await this.repository.saveOrder(newOrderToSave)

        await sendEmail(userEmail, ProductList)
        await cartService.deleteAllProductsInCar(userEmail)
    }

    async getOrders(clientId){ 
        return await this.repository.getOrders(clientId)
    }
}