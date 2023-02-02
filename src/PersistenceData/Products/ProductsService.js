import Products from "./Products.js";
import { productDAO } from "../../containers/DAO.js";
import { ProductsRepository } from "./ProductsRepository.js";
import createId from "../../resources/getId.js";
import { loggerInfo, loggerWarn } from "../../loggers/loggers.js";
import {checkProductValues} from "../../resources/checkAllValues.js";
import checkProduct from "../../resources/checkProductExits.js";
import createProduct, {} from "../../resources/CreateProduct.js"

export default class ProductService { 
    constructor(){ 
        this.repository = new ProductsRepository(productDAO)
    }

    async saveProducts(productData){ 
        const checkProduct = await this.getProductsByName(productData.name)
        if(checkProduct) throw new Error("One product with this name already exits")
        const newProduct = createProduct(productData)

        await this.repository.save(newProduct); 
        loggerInfo.info(`Adicion de nuevo producto: ${productData.name}`)
        }

    async getAllProducts(){ 
        const productsSaved = await this.repository.get()
        loggerInfo.info("Despliegue de catalogos de productos.")
        return productsSaved.map(products => products.asDTO())
    }

    async getProductById(id_added){ 
            const productSaved = await this.repository.getById(id_added)
            return productSaved.asDTO()
    }

    async deleteOneProduct(id){ 
        const product = await this.getProductById(id) 
        if (product == null || undefined) throw new Error("This product doesnt exits")

        await this.repository.deleteById(id)
        loggerWarn.warn(`Producto eliminado. ID:${id}`)
        return ("The product was deleted succesfully")
           
    }

    async getProductsByName(name){ 
        return await this.repository.getByName(name)
    }

    async updateProduct(prodID, newProductData){ 

        await checkProduct(prodID)
        await checkProductValues(newProductData)

        await this.repository.updateProduct(prodID, newProductData)
        loggerWarn.warn(`Producto actualizado. Nuevos datos: \n 
                        Nombre:${newProductData.name}, \n 
                        Price:${newProductData.price} \n 
                        Description: ${newProductData.description}`)
    }
}