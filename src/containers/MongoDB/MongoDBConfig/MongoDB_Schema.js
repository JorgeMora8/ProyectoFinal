import {Schema, model, mongoose, mongo} from "mongoose";


const UserSchema = new mongoose.Schema({ 
    id: {type:String, required:true}, 
    email: {type:String, required:true},  
    password: {type:String, required:true},
    name: {type:String, required:true}, 
    lastName: {type:String, required:true}, 
    image: {type:String, required:true}, 
    admin:{type:Boolean, required:true}
})

const ProductsSchema = new mongoose.Schema({ 
    id: {type:String, required:true}, 
    name: {type:String, required:true},  
    description: {type:String, required:true},
    price: {type:Number, required:true}, 
    image: {type:String, required:true}, 
})

const CartSchema = new mongoose.Schema({ 
    id: {type:String, required:true}, 
    prods: []
})

const OrderSchema = new mongoose.Schema({ 
    id:{type:String, required:true}, 
    date: {type:String, required:true}, 
    clientId: {type:String, required:true}, 
    productList:[]
})

const UserModel = mongoose.model("users", UserSchema)
const ProductSchema = mongoose.model("products", ProductsSchema)
const CartModel = mongoose.model("carts", CartSchema)
const OrderModel = mongoose.model("orders", OrderSchema)

export { 
    UserModel, 
    ProductSchema, 
    CartModel, 
    OrderModel
}