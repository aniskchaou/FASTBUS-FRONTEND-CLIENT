
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Travel = sequelize.define('travel', {
    title: Sequelize.STRING,
    type: Sequelize.STRING,
    route: Sequelize.STRING,
    date:Sequelize.STRING,
    price:Sequelize.STRING

});


module.exports = Travel;