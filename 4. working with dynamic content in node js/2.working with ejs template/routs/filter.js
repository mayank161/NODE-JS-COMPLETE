const express = require('express');

const filter = express.Router();

// for all the filters .get,post,etc their is a common starting point or address
// which is /main
filter.get('/filter', (req,res, next) => { 
    res.send('<form action="/main/filter" method="POST"> <input type="text" name="title"> <button type="submit"> add </button> </form>');
});

filter.post('/filter', (req,res,next) => {
    res.send('<h1> that is the use of filters </h1>');
    res.redirect('/');
})

module.exports = filter;