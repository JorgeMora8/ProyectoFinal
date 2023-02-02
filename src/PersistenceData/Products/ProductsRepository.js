import Products from "./Products.js"

export class ProductsRepository{ 
    constructor(dao){ 
        this.dao = dao
    }

    async save(data){ 
        let productData = data.asDTO()
        await this.dao.save(productData)
        return productData
    }

    async get(){ 
        let productSaved = await this.dao.getAll(); 
        return productSaved.map(prod => new Products(prod))
    }

    async getById(product_id) { 
        let product_searched = await this.dao.getById(product_id); 
        if (product_searched == undefined){ 
            throw new Error ("Theres no product saved ")
        }
        return new Products(product_searched); 
    }

    async deleteById(id_added) { 
        await this.dao.deleteById(id_added)
    }

    async getByName(name){ 
        return await this.dao.getByName(name)
            
    }

    async updateProduct(productID, productData){ 
        await this.dao.updateOneProduct(productID, productData)
    }



}