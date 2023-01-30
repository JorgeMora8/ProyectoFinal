import { orderDAO } from "../containers/DAO.js";
import {productService} from "../PersistenceData/Products/ProductInstance.js"










































// import { orderDAO } from "../containers/DAO.js";
// import {productService} from "../PersistenceData/Products/ProductInstance.js"

// export default async function createOrder(userData, carData){ 
//     let productsInCart = carData["products"]
//     const list = []

//     for(let i=0; i<=productsInCart.length; i++){ 
//         let info = await ProductItem(productsInCart[i]["id"], productsInCart)
//         console.log(info)
//     }

    
// }

// export async function ProductItem(idProd, productList) { 
//     const ProductSaved = []  

//     if(ProductSaved.includes(idProd)){}
//     else { 
//         const ProductData = await productService.getProductById(idProd)
//         let quanity = 0

//         for(let i=0; i<=productList.length; i++){ 
//             if(productList[i] == undefined){ 
//                 break
//             }
    
//             if (productList[i].id === idProd){ 
//                 quanity += 1
//             }
//         }

//         return { 
//             Product: ProductData, 
//             cant: quanity
//         }


//     }
// }