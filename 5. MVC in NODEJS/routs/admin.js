const express = require('express');

const admin = express.Router(); // setting express.Router here

const path = require('path');
// so that we can require file and can use exports in their
const getController = require('../controllers/products.js');
// here using getAddProduct export in the admin.get request
admin.get('/product',getController.getAddProduct);

admin.post('/All-product',getController.postProduct);

module.exports = admin;
