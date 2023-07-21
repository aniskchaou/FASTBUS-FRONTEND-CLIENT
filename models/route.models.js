
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Route = sequelize.define('route', {
    name: Sequelize.STRING,
    from: Sequelize.STRING,
    to: Sequelize.STRING,
    breakPoints: Sequelize.STRING,
    distance: Sequelize.STRING,
    approximateTime: Sequelize.STRING,
    childSeat: Sequelize.STRING,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    SpacialSeat: Sequelize.STRING
});


module.exports = Route;