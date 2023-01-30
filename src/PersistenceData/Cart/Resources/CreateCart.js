import Cart from "../Cart.js"

export default function createCart(id){ 
    let cartCreaded = new Cart(`12345${id}`)
    return cartCreaded
}