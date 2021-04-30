const express = require('express');

const admin = express.Router(); // setting express.Router here

admin.get('/product', (req,res,next) => {
    console.log('product page opened');
    res.send('<form action="/All-product" method="POST"> <input type="text" name="title"> <button type="submit"> add </button> </form>');
});

admin.post('/All-product',(req,res,next) => {
    res.send('<h1> product added <h1>');
    console.log(req.body); // this will work only due to body parser
    res.redirect('/');
});

module.exports = admin; // it will export the admin to the other files too.
