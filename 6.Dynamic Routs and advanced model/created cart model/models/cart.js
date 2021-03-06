// we have to collect and save the cart detail so we hav e to create a model for that

const fs = require('fs');

const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class cart {
    static addProduct(id,productPrice) {
        //fetch the previous product
        fs.readFile(p, (err,fileContent) => {
            let cart = {products: [], totalPrice: 0}
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(p => p.id === id);
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;
            if(existingProduct) {
               updatedProduct = {...existingProduct }
               updatedProduct.qty += 1;
               cart.products = {...cart.products}
               cart.products[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products , updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p,JSON.stringify(cart), (err) => {
                console.log(err);
            })
        }) 
    }
}