var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var ContactPage = sequelize.define('contact_page', {
    subTitleSection: Sequelize.STRING,
    titleSection: Sequelize.STRING,
    contactFormTitle: Sequelize.STRING,
    contactInformationTitle: Sequelize.STRING
});


module.exports = ContactPage;