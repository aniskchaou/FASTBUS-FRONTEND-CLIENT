
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Vehicule = sequelize.define('vehicule', {
    registration: Sequelize.STRING,
    type: Sequelize.STRING,
    model: Sequelize.STRING,
    chassis: Sequelize.STRING,
});


module.exports = Vehicule;