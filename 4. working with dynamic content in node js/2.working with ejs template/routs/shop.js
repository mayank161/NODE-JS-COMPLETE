const express = require('express');

const routs = express.Router();

const product = require('./admin.js');

routs.get('/',(req,res,next) => {
    //res.send('<h1> send the data using Express </h1>');
    const products = product.product;
    res.render('shop',{prods: products, docTitle: 'shopPage'});
    // now we can use product object b pods in our pug file as well as docTitle
});

module.exports = routs;