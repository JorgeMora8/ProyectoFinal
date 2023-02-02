import databaseConection from "./MongoDBConfig/DatabaseConection.js"

await databaseConection()


export default class Container{ 
    constructor(schema){ 
        this.schema = schema
    }

    async save(data){ 
            await this.schema.create(data);
       }

    // async saveInSchema(data, idCart){ 
    //   await this.schema.updateOne({id: idCart}, {$push:{prods:data}})
    // }

    // async deleteInSchema(idProd, idCart) { 
    //   await this.schema.updateOne({id: idCart}, {$pull:{"prods": {"id": idProd}}})
    // }

    async getAll() { 
      return await this.schema.find({}, {_id:0, __v:0}).lean();
    }

    async getByEmail(NameAdded){
      // try {
      //   const item = this.schema.findOne({email:NameAdded}, {_id:0, __v:0}); 
      //   if(item == null){ 
      //     throw new Error("El usuario no existe")
      //   }
      //   return item
      // } catch (error) {
      //   console.log(error)
      // }

  
       return this.schema.findOne({email:NameAdded}, {_id:0, __v:0}); 
     }

    async getByName(name){ 
      return await this.schema.findOne({name:name}, {_id:0, __v:0});
 
     }

    async getProductsInCart(idCart){ 
      await this.schema.findOne({id:idCart}, {_id:0, __v:0, id:0}); 

     }

    async getById(Id){
        // const item = await this.schema.findOne({id:Id}, {_id:0, __v:0})
        // if (item == null){ 
        //   throw new Error("The product doesnt exits")
        // }else{ 
        //   return item
        // }

        return await this.schema.findOne({id:Id}, {_id:0, __v:0})

     }

     async getManyById(clientId){ 
        return await this.schema.find({clientId:clientId}, {_id:0, __v:0})
     }

     async deleteById(Id) { 
        await this.schema.deleteOne({id:Id})
     }

      async deleteAll(){
          return await this.schema.deleteMany({})
      }

      async addProductInCar(carID, {name, price, description, id, image}){ 
        await this.schema.updateOne({id:carID }, {$push:{prods:{
          name:name, 
          price:price, 
          description:description, 
          id:id, 
          image:image, 
        }}})
      }

      async deleteAllProducts(carID){ 
        await this.schema.updateOne({id: carID} ,{prods:[]})
      }

      async deleteProductInCar(carID, productID){
        await this.schema.updateOne({id:carID }, {$pull:{prods:{id:productID}}})
      }

      async updateOneProduct(productID, newData) { 
        const {name, description, price, image} = newData
        await this.schema.updateOne({id:productID}, {$set:{name, description, price, image}})
      }

      async orderRegister(orderData){ 
        await this.schema.create(orderData)
      }


    };