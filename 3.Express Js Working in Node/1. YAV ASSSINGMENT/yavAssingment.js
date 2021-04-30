// Answer 1 => with req we can perform methods of request and for res we can
// handel request but for next from which we can move down to the next middleware 

// Answer 2 =>

const http = require('http');
const express = require('express');

const radius= express();

console.log('hi')
radius.post((req,res,next) => {
    res.send('<form action="/All-product" method="POST"> <input type="text" name="title"> <button type="submit"> add </button> </form>');
    //res.sendFile(path.join(__dirname,'radius.html'));
})

radius.listen(3600);