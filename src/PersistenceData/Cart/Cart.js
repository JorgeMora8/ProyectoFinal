//Carts

export default class Cart { 
    id
    constructor(id, products=[]){ 
        this.id = id 
        this.products = products
    }

    async asDTO(){ 
       return { 
        id: this.id, 
        products:this.products
       }
    }
}