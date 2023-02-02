import {productService} from "../PersistenceData/Products/ProductInstance.js"

async function getProducts(req, res) { 
    try{
        res.send(await productService.getAllProducts())
    }catch(error){ 
        res.status(400).json({Error:`There was an error: ${error}`})
    }
}

async function getOneProduct(req, res) { 
    try{
        let response =  await productService.getProductById(req.params.id)
        res.send(response)
    }catch(error){ 
        res.status(400).send(`${error}`)
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
    try {
        await productService.updateProduct(req.params.id, req.body)
        res.status(201).json({Success:`The product was updated succesfully... `})

    } catch (error) {
        res.status(400).json({Error:`${error}`})
    }
}   

async function deleteOneProduct(req, res) { 
    try{
        let state = await productService.deleteOneProduct(req.params.id)
        res.send(state)
    } catch(error){ 
        res.status(400).json({Message:`${error}`})
    }
}

export { 
    getProducts, 
    getOneProduct, 
    addOneProduct, 
    updateOneProduct, 
    deleteOneProduct
}