const express = require('express');

const admin = express.Router(); // setting express.Router here

const path = require('path');

admin.get('/product', (req,res,next) => {
    console.log('product page opened');
    //res.sendFile(path.join(__dirname,'../','views','admin.html'));
    res.render('admin.pug', { docTitle: 'productPage'});
});

const addProduct = []; // so we can add product and outsource them

admin.post('/All-product',(req,res,next) => {
    //res.send('<h1> product added <h1>');
    addProduct.push({title : req.body.title});
    console.log(req.body.title); // this will work only due to body parser
    res.redirect('/');
});

 exports.product = addProduct;
 exports.admin = admin; // it will export the admin to the other files too.
