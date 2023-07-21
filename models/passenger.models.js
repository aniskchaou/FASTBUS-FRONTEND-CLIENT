
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Passenger = sequelize.define('passenger', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    telephone: Sequelize.STRING
});


module.exports = Passenger;