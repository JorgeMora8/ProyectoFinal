import databaseConection from "./MongoDBConfig/DatabaseConection.js"

await databaseConection()


export default class Container{ 
    constructor(schema){ 
        this.schema = schema
    }

    async save(data){ 
        try {
            await this.schema.create(data);
        } catch (error) {
            throw new Error(`There was an error: ${error}`) 
        }
       }

    async saveInSchema(data, idCart){ 
      await this.schema.updateOne({id: idCart}, {$push:{prods:data}})
    }

    async deleteInSchema(idProd, idCart) { 
      await this.schema.updateOne({id: idCart}, {$pull:{"prods": {"id": idProd}}})
    }

    async getAll() { 
      return await this.schema.find({}, {_id:0, __v:0}).lean();
    }

    async getByName(NameAdded){
      try {
        const item = this.schema.findOne({email:NameAdded}, {_id:0, __v:0}); 
        if(item == null){ 
          throw new Error("El usuario no existe")
        }
        return item
      } catch (error) {
        console.log(error)
      }
     }

     async getItemByName(name){ 
      const item = this.schema.findOne({name:name}, {_id:0, __v:0});
      return item 
     }

     async getProductsInCart(idCart){ 
      const getProductsInCart = await this.schema.findOne({id:idCart}, {_id:0, __v:0, id:0}); 
      return getProductsInCart
     }

    async getById(Id){
        const item = await this.schema.findOne({id:Id}, {_id:0, __v:0})
        if (item == null){ 
          throw new Error("The product doesnt exits")
        }else{ 
          return item
        }
     }

     async deleteById(Id) { 
      let productExits = false
      try{ 
        await this.getById(Id)
        productExits = true
      }catch(error){ 
        throw new Error(`The product doesnt exits ${error}`)
      }

      if (productExits){ 
        await this.schema.deleteOne({id:Id})
      }
     }

      async deleteAll(){
        try {
          return await this.schema.deleteMany({})
        } catch (error) {
          console.log(error)
        }
      }

      async addProductInCar(carID, {name, price, description, id, image}){ 


        await this.schema.updateOne({id:carID }, {$push:{prods:{
          name:name, 
          price:price, 
          description:description, 
          id:id, 
          image:image, 
          cant:1
        }}})
      }

      async deleteAllCarProducts(email){ 
        await this.schema.updateOne({id: email} ,{prods:[]})
      }

      async deleteProductInCar(carID, productID){
        await this.schema.updateOne({id:carID }, {$pull:{prods:{id:productID}}})
      }

      async updateOneProduct(productID, newData) { 
        const {name, description, price, image} = newData
        await this.schema.updateOne({id:productID}, {$set:{name, description, price, image}})
      }

    };