
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var City = sequelize.define('city', {
    name: Sequelize.STRING,
});


module.exports = City;