const express = require('express');

const routs = express.Router();

routs.get('/',(req,res,next) => {
    res.send('<h1> send the data using Express </h1>');
});

module.exports = routs;