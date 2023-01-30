// import { productService } from "../containers/DAO.js"
import {productService} from "../PersistenceData/Products/ProductInstance.js"
import {checkAllValues} from "../resources/checkAllValues.js"
import checkProduct from "../resources/checkProductExits.js"
import { loggerError, loggerInfo, loggerWarn } from "../loggers/loggers.js"

async function getProducts(req, res) { 
     res.send( await productService.getAllProducts())
}

async function getOneProduct(req, res) { 
    try{
    let response =  await productService.getProductById(req.params.id)
    res.send(response)
    }catch(error){ 
        res.status(400).json({Message:`${error}. The product doesnt exits`})
    }
}

async function addOneProduct(req, res) { 
    
    try{
    await productService.saveProducts(req.body)
    res.send("The product was saved succesfully !")}
    catch(error){ 
        res.status(400).send(`${error}`)
    }
}

async function updateOneProduct(req, res) { 
    let productID = req.params.id
    let newData = req.body

    try {
        checkAllValues(newData)
        await checkProduct(productID)
        await productService.updateProduct(productID, newData)
        res.status(201).json({Success:`The product was updated succesfully... `})

    } catch (error) {
        res.status(400).json({Error:`${error}`})
    }
}   

async function deleteOneProduct(req, res) { 
    let state = await productService.deleteOneProduct(req.params.id)
    res.send(state)
    
}

export { 
    getProducts, 
    getOneProduct, 
    addOneProduct, 
    updateOneProduct, 
    deleteOneProduct
}