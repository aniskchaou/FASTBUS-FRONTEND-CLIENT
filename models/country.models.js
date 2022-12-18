
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Country = sequelize.define('country', {
    name: Sequelize.STRING,
});


module.exports = Country;