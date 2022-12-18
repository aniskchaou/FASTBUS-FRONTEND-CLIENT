var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var user = require("./seeds.sequelize")
var Route = require("../models/route.models.js")
console.log(user)

sequelize.sync().then(function () {
    User.create(user.userSeed);
    Route.create()
}).then(function (res) {
    console.log(res.get({ plain: true }));
});

