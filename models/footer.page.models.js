var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var FooterPage = sequelize.define('footer_page', {
    title1Footer: Sequelize.STRING,
    title2Footer: Sequelize.STRING,
    title3Footer: Sequelize.STRING,
    title4Footer: Sequelize.STRING
});


module.exports = FooterPage;