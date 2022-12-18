
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Driver = sequelize.define('driver', {
    license: Sequelize.STRING,
    name: Sequelize.STRING,
    dateOfBirth: Sequelize.STRING
});


module.exports = Driver;