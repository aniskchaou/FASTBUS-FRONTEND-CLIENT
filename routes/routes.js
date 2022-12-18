var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')



//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);


//Home
routerr.get('/', indexController.getHome)
routerr.get('/destination', indexController.getDestination)
routerr.get('/pricing', indexController.getPricing)
routerr.get('/contact', indexController.getContact)
routerr.post('/search', indexController.getSearch)
routerr.get('/booking', indexController.getBooking)
routerr.post('/booking', indexController.postBooking)


module.exports = routerr;