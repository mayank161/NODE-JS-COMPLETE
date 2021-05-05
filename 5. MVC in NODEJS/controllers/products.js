// these files contains controllers and exports them into different files

exports.getAddProduct = (req,res,next) => {
    res.render('admin.ejs', { docTitle: 'productPage'});
}
// so you can export this function inside some routes

const product = require('../models/product.js');

exports.postProduct = (req,res,next) => {
    const products = new product(req.body.title);
    products.save();
    res.redirect('/');
}

exports.getShop = (req,res,next) => {
    product.fetch((products) => { // here product as an call back function run after fetch async calls
        res.render('shop',{prods: products, docTitle: 'shopPage'});
    });
    //res.render('shop',{prods: products, docTitle: 'shopPage'});
}