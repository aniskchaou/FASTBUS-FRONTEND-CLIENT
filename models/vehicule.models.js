
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Vehicule = sequelize.define('vehicule', {
    registration: Sequelize.STRING,
    year: Sequelize.STRING,
    engine: Sequelize.STRING,
    type: Sequelize.STRING,
    model: Sequelize.STRING,
    chassis: Sequelize.STRING,
    owner: Sequelize.STRING,
    brand: Sequelize.STRING,
});


module.exports = Vehicule;