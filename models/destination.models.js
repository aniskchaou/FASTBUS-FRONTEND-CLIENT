
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Destination = sequelize.define('destination', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
});


module.exports = Destination;