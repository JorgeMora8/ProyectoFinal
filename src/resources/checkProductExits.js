import {productService} from "../PersistenceData/Products/ProductInstance.js"

export default async function checkProduct(productID){ 
    const productFound = await productService.getProductById(productID)
    if(productFound == null) throw new Error("Product not found")
}