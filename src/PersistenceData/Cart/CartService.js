import CartRepository from "./CartRepository.js"
import { cartDAO } from "../../containers/DAO.js"
import Cart from "./Cart.js"

export default class CartService { 
    constructor(){ 
        this.repository = new CartRepository(cartDAO)
    }

    async save(cartData){ 
        try{
        const newCart = new Cart(cartData)
        await this.repository.save(newCart)
        }catch(error) { 
            throw new Error(error)
        }
    }

    async getAllCarts(){ 
        const cartSaved = await this.repository.getCarts()
        return cartSaved
    }

    async getCartById(cartID){ 
        try {
            const cartFound = await this.repository.getCartsById(cartID)
            return cartFound
        } catch (error) {
            console.log(error)
        }
    }

    async saveProductInCar(carID, product){
        
        //Check if this product is in the car


        //If there isnt create the product adding the item cant or if exits add one 
        try{ 
            await this.repository.saveProductInCar(carID, product)
        }catch(error){ 
            throw new Error(error)
        }

         
    }

    async deleteProductInCar(carID, productId){ 
        await this.repository.deleteProduct(carID, productId)
    }

    async getProductInCar(productId, carID) { 
        return await this.repository.getProductInCar(productId, carID)
    }
}