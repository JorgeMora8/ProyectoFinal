import Cart from "./Cart.js"

export default class CartRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(cartClass){ 
        let cartInfo = await cartClass.asDTO()
        await this.dao.save(cartInfo)
        return cartInfo
    }

    async getCarts(){ 
        let cartsSaved = await this.dao.getAll()
        let newCart = cartsSaved.map(cart => new Cart(cart.id))
        
        return newCart
    }

    async getCartsById(cartID){ 
        let cartSearched = await this.dao.getById(cartID)
        if (cartSearched == undefined) throw new Error("Theres no cart saved with this id... ")

        return new Cart(cartSearched.id, cartSearched.prods)
    }

    async saveProductInCar(carID, product){ 
        await this.dao.addProductInCar(carID, product)
    }

    async deleteProduct(carID, productID){ 
        await this.dao.deleteProductInCar(carID, productID)
    }

    //Procede la operacion a la base de datos
    async getProductInCar(productID, carId) { 
        return await this.dao.getOneProduct(productID, carId)
    }
}