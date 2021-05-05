const express = require('express');

const routs = express.Router();

const getController = require('../controllers/products.js');

routs.get('/',getController.getShop);

module.exports = routs;