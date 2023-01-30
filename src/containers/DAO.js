import Container from "./MongoDB/MongoContainer.js"
import { 
    ProductSchema, 
    UserModel, 
    OrderModel, 
    CartModel
        
} from "./MongoDB/MongoDBConfig/MongoDB_Schema.js"

const productDAO = new Container(ProductSchema);
const userDAO = new Container(UserModel);
const orderDAO = new Container(OrderModel);
const cartDAO = new Container(CartModel);


export {
    productDAO, 
    userDAO, 
    orderDAO, 
    cartDAO
}