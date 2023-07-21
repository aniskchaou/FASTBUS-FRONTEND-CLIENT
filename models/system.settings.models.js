var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var SystemSettings = sequelize.define('system_settings', {
    appName: Sequelize.STRING,
    showLogo: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    entrepriseName: Sequelize.STRING,
    //    telephone: Sequelize.STRING,
    //description: Sequelize.STRING,
    logo: Sequelize.STRING,
    //twitter: Sequelize.STRING,
    //facebook: Sequelize.STRING,
    //linkedin: Sequelize.STRING,
    //instagram: Sequelize.STRING


});


module.exports = SystemSettings;