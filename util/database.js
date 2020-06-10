const Sequelize = require('sequelize')
//new Sequelize('DB Name', 'username', 'password', {Object});
const sequelize = new Sequelize('node_complete', 'root', 'root', { 
    dialect: 'mysql',
    host: 'localhost'
 });

 module.exports = sequelize;