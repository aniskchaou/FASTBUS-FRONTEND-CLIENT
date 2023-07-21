
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Destination = sequelize.define('destination', {
    city: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
});


module.exports = Destination;