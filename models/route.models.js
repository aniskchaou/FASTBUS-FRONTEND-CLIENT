
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
    status: Sequelize.STRING,
    date: Sequelize.DATE,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    route: Sequelize.STRING,
    persons: Sequelize.STRING
});


module.exports = Route;