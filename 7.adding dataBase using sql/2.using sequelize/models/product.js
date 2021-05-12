// requires sequelize to use sequelize methods
const Sequelize = require('sequelize');
// getting our database path to store data in it
const sequelize= require('../util/dataBase');
// defining the data from dataBase so can be used by product
const product = sequelize.define('product',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = product;