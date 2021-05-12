const Sequelize = require('sequelize');

const sequelize = require('../util/dataBase');

const cart = sequelize.define('cart',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = cart;