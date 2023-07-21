
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Booking = sequelize.define('booking', {
    date: Sequelize.STRING,
    passenger: Sequelize.STRING,
    trip: Sequelize.STRING,
    payment: Sequelize.STRING,
    adults: Sequelize.STRING,
    kids: Sequelize.STRING
});


module.exports = Booking;