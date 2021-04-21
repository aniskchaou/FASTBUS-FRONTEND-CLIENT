var userService = require('../../services/user.services')
var userMock = require('../../mocks/booking.mocks')
var User = require("../../models/user.models")
var userService = require("../../services/user.services")


exports.create = (req, res) => {
    userService.createUserService(req, res)
};


exports.findAll = (req, res) => {
    userService.findALLService(req, res)
};


exports.findOne = (req, res) => {
    userService.updateUserService(req, res)
};



exports.update = (req, res) => {
    userService.updateUserService(req, res)
};


exports.delete = (req, res) => {
    userService.deleteUserService(req, res)
};


exports.deleteAll = (req, res) => {
    userService.deleteAllUsersService(req, res)
};