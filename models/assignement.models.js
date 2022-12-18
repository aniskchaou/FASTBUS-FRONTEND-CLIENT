
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Assignement = sequelize.define('assignement', {
    travel: Sequelize.STRING,
    resgistration: Sequelize.STRING,
    date: Sequelize.STRING,
    driver: Sequelize.STRING,
    status: Sequelize.STRING
});


module.exports = Assignement;