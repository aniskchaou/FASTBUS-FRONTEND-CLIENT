
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Station = sequelize.define('station', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING
});


module.exports = Station;