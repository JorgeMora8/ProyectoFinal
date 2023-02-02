export default class OrderRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async getOrders(clientId) { 
        let ordersSaved = await this.dao.getManyById(clientId)   
        return ordersSaved
    }
    
    async saveOrder(order){ 
        await this.dao.save(order.asDTO())
        // console.log(order.asDTO())
    }
}