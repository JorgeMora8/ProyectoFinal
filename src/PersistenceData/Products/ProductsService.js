import Products from "./Products.js";
import { productDAO } from "../../containers/DAO.js";
import { ProductsRepository } from "./ProductsRepository.js";
import createId from "../../resources/getId.js";
import { loggerInfo, loggerWarn } from "../../loggers/loggers.js";

export default class ProductService { 
    constructor(){ 
        this.repository = new ProductsRepository(productDAO)
    }

    async saveProducts({name, price, image, description}){ 


    const checkProduct = await this.getProductsByName(name)
    if(checkProduct) throw new Error("One product with this name already exits")
        try{
        const newProduct = new Products({ 
            name:name, 
            price:price, 
            image:image, 
            description:description, 
            id:createId()
        })
        await this.repository.save(newProduct); 
        loggerInfo.info(`Adicion de nuevo producto: ${name}`)
    }
    catch(error){ 
        throw new Error(`The product couldnt be saved. ${error}`)
    }
    }

    async getAllProducts(){ 
        loggerInfo.info("Despliegue de catalogos de productos.")
        const productsSaved = await this.repository.get()
        return productsSaved.map(products => products.asDTO())
    }

    async getProductById(id_added){ 
        try{ 
            const productSaved = await this.repository.getById(id_added)
            return productSaved.asDTO()
        }catch (error){ 
            throw new Error("Product not found")
        }
    }

    async deleteOneProduct(id){ 
        try{
           await this.repository.deleteById(id)
           loggerWarn.warn(`Producto eliminado. ID:${id}`)
           return ("The product was deleted succesfully")
           
        }catch(error){
           return(`There product doesnt exits`)
        }
    }

    async getProductsByName(name){ 
        return await this.repository.getByName(name)
    }

    async updateProduct(prodID, newProductData){ 

        await this.repository.updateProduct(prodID, newProductData)
        loggerWarn.warn(`Producto actualizado. Nuevos datos: \n 
                        Nombre:${newProductData.name}, \n 
                        Price:${newProductData.price} \n 
                        Description: ${newProductData.description}`)
    }

    // async getProductInCar(productId, carID) { 
    //     return await this.repository.getProductInCar(productId, carID)
    // }
}