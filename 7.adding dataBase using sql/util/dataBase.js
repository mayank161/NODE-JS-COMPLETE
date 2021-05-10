// connecting dataBase in the project
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'product-data',
    password: 'Abcd@1234'
});

// using promise so we do n ot have to use nested call backs instead it will exports pool on completion
module.exports = pool.promise();