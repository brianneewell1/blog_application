const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
require('dotenv').config();

module.exports = sequelize;
