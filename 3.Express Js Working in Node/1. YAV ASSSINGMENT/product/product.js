const path = require('path');
const express =require('express');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'product.html'));
})

app.get('/productPage.html',(req,res)=> {
    res.sendFile(path.join(__dirname,'productPage.html'))
})
app.listen(3700);