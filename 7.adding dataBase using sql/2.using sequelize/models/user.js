const Sequelize = require('sequelize');
const sequelize = require('../util/dataBase') // database path

const user = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:Sequelize.STRING,
    Email: Sequelize.STRING
})

module.exports = user