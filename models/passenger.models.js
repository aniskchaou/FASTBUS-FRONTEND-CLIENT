
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Passenger = sequelize.define('passenger', {
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING
});


module.exports = Passenger;