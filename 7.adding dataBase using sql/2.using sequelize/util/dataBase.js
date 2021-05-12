// first we have to import the sequelize class
const Sequelize = require('sequelize');

// first three argument as (schema/dataBase name,user name of mysql, password of mysql)
const sequelize = new Sequelize('product-data','root','Abcd@1234',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;