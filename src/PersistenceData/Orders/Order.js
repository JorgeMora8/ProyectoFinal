import createId from "../../resources/getId.js"


export default class Order { 

    // clientId
    // IdRegister
    // productList
    // time

    constructor(productList, clientId) { 
        this.IdRegister = createId() 
        this.productList = productList; 
        this.date = new Date()
        this.clientId = clientId
    }

    asDTO() { 
        return { 
            id: this.IdRegister, 
            clientId: this.clientId, 
            date: this.date, 
            productList: this.productList
        } 
    }
}