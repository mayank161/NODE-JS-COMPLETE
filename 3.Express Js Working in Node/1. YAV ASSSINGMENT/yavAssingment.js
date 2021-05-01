// Answer 1 => with req we can perform methods of request and for res we can
// handel request but for next from which we can move down to the next middleware 

// Answer 2

const path = require('path');
const express = require('express');

const area = express();

area.get('/',(req,res,next)=> {
    console.log('hii');
    res.sendFile(path.join(__dirname,'radius.html'));
})

area.listen(3600);