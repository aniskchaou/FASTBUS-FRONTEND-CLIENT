
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Booking = sequelize.define('booking', {
    date: Sequelize.STRING,
    passenger: Sequelize.STRING,
    route: Sequelize.STRING,
    price: Sequelize.STRING,
    status: Sequelize.STRING,
});


module.exports = Booking;