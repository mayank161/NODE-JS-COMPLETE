// so modules plays with the data and the memory storage


const fs = require('fs');
const path = require('path');

const p = path.join(__dirname,'../','Data','product.json');

module.exports = class product {
    constructor(t) {
        this.title = t;
    }

    save() {
       fs.readFile(p,(err,fileContent) => {
           let product = [];
           if(!err) { // check file present in the path or not
               product = (JSON.parse(fileContent));
               // parse because string array in form of array
           }
           product.push(this); // pushing this content in it
           fs.writeFile(p, JSON.stringify(product), (err) => {
               console.log(err);
           })
       })
    }

    static fetch(cb) { // so to adjust the async we have to use a callback function in it which will run when it read the file
        fs.readFile(p, (err,fileContent) => { // fs.read is async function so to it will throw error if we access it before time
            if(err) {
                cb([]); // we are using function so it will run only once the read file runs
            }
            cb(JSON.parse(fileContent)); // read file is async so it will run when it reads the whole
        })
    }
}