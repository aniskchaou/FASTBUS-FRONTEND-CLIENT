var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var DestinationPage = sequelize.define('destination_page', {
    mainTitle: Sequelize.STRING,
    destinationSection: Sequelize.STRING,
    descriptionDestination: Sequelize.STRING
});


module.exports = DestinationPage;