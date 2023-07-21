
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Offer = sequelize.define('offer', {
    name: Sequelize.STRING,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    code: Sequelize.STRING,
    discount: Sequelize.STRING,
    travel: Sequelize.STRING,
    condition: Sequelize.STRING,
});


module.exports = Offer;