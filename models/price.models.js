
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Price = sequelize.define('price', {
    route: Sequelize.STRING,
    vehiculeType: Sequelize.STRING,
    price: Sequelize.STRING,
    kidsPrice: Sequelize.STRING,
    specialPrice: Sequelize.STRING,
});


module.exports = Price;