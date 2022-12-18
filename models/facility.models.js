
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Facility = sequelize.define('facility', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING
});


module.exports = Facility;