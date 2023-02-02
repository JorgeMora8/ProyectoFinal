import { orderService } from "../PersistenceData/Orders/orderInstance.js"

async function getOrders(req, res) { 
    try {
        let orderList = await orderService.getOrders(req.user.id)
        res.status(200).json({Order_list: orderList})        
    } catch (error) {
        res.status(400).json({Error:`There was an error${error}.`})
    }
}

async function postOrders(req, res) { 
    try {
        await orderService.saveOrder(req.user.id, req.user.email)
        res.status(201).json({Success:"The order was created... "})   
    } catch (error) {
        res.status(400).json({Error:`There was an error ${error}`})        
    }
}

export { 
    getOrders, 
    postOrders
}