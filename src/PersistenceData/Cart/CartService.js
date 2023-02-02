import CartRepository from "./CartRepository.js"
import { cartDAO } from "../../containers/DAO.js"
import { productService } from "../Products/ProductInstance.js"
import Cart from "./Cart.js"

export default class CartService { 
    constructor(){ 
        this.repository = new CartRepository(cartDAO)
    }

    async createCar(userEmailAsID){ 
        const newCart = new Cart(userEmailAsID)
        await this.repository.save(newCart)
    }

    async getAllCarts(){ 
        const cartSaved = await this.repository.getCarts()
        return cartSaved
    }

    async getCartById(cartID){ 
            const cartFound = await this.repository.getCartsById(cartID)
            return cartFound
        }

    async saveProductInCar(carID, ProductID){
            if(!carID) throw new Error("Product ID missing.")
            const carFound = await this.getCartById(carID); 
            const productFound = await productService.getProductById(ProductID)
            await this.repository.saveProductInCar(carID, productFound)
    }

    async deleteProductInCar(carID, productId){ 
        await this.repository.deleteProduct(carID, productId)
    }

    async getProductInCar(productId, carID) { 
        return await this.repository.getProductInCar(productId, carID)
    }

    async deleteAllProductsInCar(carID){ 
        await this.repository.deleteAll(carID)
    }

}