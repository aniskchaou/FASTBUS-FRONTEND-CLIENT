
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Travel = sequelize.define('travel', {
    title: Sequelize.STRING,

});


module.exports = Travel;