const http = require('http');
const express = require('express'); // saves by npm install --save express

const bodyParse = require('body-parser'); // saves through npm in dependencies

const app = express();

const rout1 = require('./routs/admin.js');// we have to add our rout file so we can shorten the code

const rout2 = require('./routs/shop.js') // location where we have get or post data;

const filter = require('./routs/filter.js'); 

app.use(bodyParse.urlencoded( { extended : false } )); // extended will false so that you can parse non default values 

app.use(rout1);
app.use(rout2); // using these get post here in app

// so the filters alow us to put the common stating segment
app.use('/main',filter); // so we start after page /main so it is applicable to all the filters

app.use((req,res,next)=> { // this will run for all because req move top to down
    res.status(404).send('<h1> page not found </h1>'); // it will run for the particular status
})



//const server = http.createServer(app);

//server.listen(3500);

app.listen(3500); // this is equal to above code because same code is written in express ripo.