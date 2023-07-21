var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var HomePage = sequelize.define('home_page', {
    mainTitle: Sequelize.STRING,
    searBarTitle: Sequelize.STRING,
    from: Sequelize.STRING,
    to: Sequelize.STRING,
    date: Sequelize.STRING,
    persons: Sequelize.STRING,
    submit: Sequelize.STRING,
    destinationSection: Sequelize.STRING,
    descriptionDestination: Sequelize.STRING,
    subdcribeSection: Sequelize.STRING,
    descriptionSubscribe: Sequelize.STRING,
});


module.exports = HomePage;