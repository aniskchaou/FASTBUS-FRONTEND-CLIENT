var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')
var destinationController = require('../controllers/api/destination.controllers')
var assignementController = require('../controllers/api/assignement.controllers')
var bookingController = require('../controllers/api/booking.controllers')
var driverController = require('../controllers/api/driver.controllers')
var offerController = require('../controllers/api/offer.controllers')
var passengerController = require('../controllers/api/passenger.controllers')
var priceController = require('../controllers/api/price.controllers')
var routeController = require('../controllers/api/route.controllers')
var stationController = require('../controllers/api/station.controllers')
var travelController = require('../controllers/api/travel.controllers')
var vehiculeController = require('../controllers/api/vehicule.controllers')

var settingsController = require('../controllers/api/settings.controllers')


//settings
routerr.get("/api/syssettings", settingsController.findSystemSettings);
routerr.put("/api/edit/systemsettings/:id", settingsController.updateSystemSettings);
routerr.get("/api/restore/syssettings/:id", settingsController.restoreSystemSettings);
routerr.get("/api/dashboardsettings", settingsController.findDashboardSettings);
routerr.put("/api/edit/dashboardsettings/:id", settingsController.updateDashboardSettings);
routerr.get("/api/restore/dashboard/:id", settingsController.restoreDashboardSettings);
routerr.get("/api/emailtemplatesettings", settingsController.findEmailTemplateSettings);
routerr.get("/api/emailsettings", settingsController.findEmailSettings);
routerr.put("/api/edit/emailsettings/:id", settingsController.updateEmailSettings);
routerr.get("/api/footersettings", settingsController.findFooterSettings);
routerr.put("/api/edit/footersettings/:id", settingsController.updateFooterSettings);
routerr.get("/api/restore/footer/:id", settingsController.restoreFooterSettings);
routerr.get("/api/headersettings", settingsController.findHeaderSettings);
routerr.put("/api/edit/headersettings/:id", settingsController.updateHeaderSettings);
routerr.get("/api/restore/header/:id", settingsController.restoreHeaderSettings);
routerr.get("/api/localisationsettings", settingsController.findLocalisationSettings);
routerr.put("/api/edit/localisationsettings/:id", settingsController.updateLocalisationSettings);
routerr.get("/api/notificationsettings", settingsController.findNotificationSettings);
routerr.put("/api/edit/notificationsettings/:id", settingsController.updateNotificationsSettings);
routerr.get("/api/restore/localisationsettings/:id", settingsController.restoreLocalisationSettings);

//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);
routerr.post("/api/user/login", userController.login);
//destination
routerr.post('/api/destination', destinationController.create)
routerr.get('/api/destination', destinationController.findAll)
routerr.get("/api/destination/:id", destinationController.findOne);
routerr.put("/api/destination/:id", destinationController.update);
routerr.delete("/api/destination/:id", destinationController.delete);
routerr.delete("/api/destination", destinationController.deleteAll);

//Home
routerr.get('/', indexController.getHome)
routerr.get('/destination', indexController.getDestination)
routerr.get('/pricing', indexController.getPricing)
routerr.get('/contact', indexController.getContact)
routerr.post('/search', indexController.getSearch)
routerr.get('/booking/:route/:price/:status', indexController.getBooking)
routerr.post('/booking', indexController.postBooking)


//assignement
routerr.post('/api/assignement', assignementController.create)
routerr.get('/api/assignement', assignementController.findAll)
routerr.get("/api/assignement/:id", assignementController.findOne);
routerr.put("/api/assignement/:id", assignementController.update);
routerr.delete("/api/assignement/:id", assignementController.delete);
routerr.delete("/api/assignement", assignementController.deleteAll);


//booking
routerr.post('/api/booking', bookingController.create)
routerr.get('/api/booking', bookingController.findAll)
routerr.get("/api/booking/:id", bookingController.findOne);
routerr.put("/api/booking/:id", bookingController.update);
routerr.delete("/api/booking/:id", bookingController.delete);
routerr.delete("/api/booking", bookingController.deleteAll);


//driver
routerr.post('/api/driver', driverController.create)
routerr.get('/api/driver', driverController.findAll)
routerr.get("/api/driver/:id", driverController.findOne);
routerr.put("/api/driver/:id", driverController.update);
routerr.delete("/api/driver/:id", driverController.delete);
routerr.delete("/api/driver", driverController.deleteAll);

//offer
routerr.post('/api/offer', offerController.create)
routerr.get('/api/offer', offerController.findAll)
routerr.get("/api/offer/:id", offerController.findOne);
routerr.put("/api/offer/:id", offerController.update);
routerr.delete("/api/offer/:id", offerController.delete);
routerr.delete("/api/offer", offerController.deleteAll);

//passenger
routerr.post('/api/passenger', passengerController.create)
routerr.get('/api/passenger', passengerController.findAll)
routerr.get("/api/passenger/:id", passengerController.findOne);
routerr.put("/api/passenger/:id", passengerController.update);
routerr.delete("/api/passenger/:id", passengerController.delete);
routerr.delete("/api/passenger", passengerController.deleteAll);

//price
routerr.post('/api/price', priceController.create)
routerr.get('/api/price', priceController.findAll)
routerr.get("/api/price/:id", priceController.findOne);
routerr.put("/api/price/:id", priceController.update);
routerr.delete("/api/price/:id", priceController.delete);
routerr.delete("/api/price", priceController.deleteAll);

//route
routerr.post('/api/route', routeController.create)
routerr.get('/api/route', routeController.findAll)
routerr.get("/api/route/:id", routeController.findOne);
routerr.put("/api/route/:id", routeController.update);
routerr.delete("/api/route/:id", routeController.delete);
routerr.delete("/api/route", routeController.deleteAll);

//station
routerr.post('/api/station', stationController.create)
routerr.get('/api/station', stationController.findAll)
routerr.get("/api/station/:id", stationController.findOne);
routerr.put("/api/station/:id", stationController.update);
routerr.delete("/api/station/:id", stationController.delete);
routerr.delete("/api/station", stationController.deleteAll);

//travel
routerr.post('/api/travel', travelController.create)
routerr.get('/api/travel', travelController.findAll)
routerr.get("/api/travel/:id", travelController.findOne);
routerr.put("/api/travel/:id", travelController.update);
routerr.delete("/api/travel/:id", travelController.delete);
routerr.delete("/api/travel", travelController.deleteAll);

//vehicule
routerr.post('/api/vehicule', vehiculeController.create)
routerr.get('/api/vehicule', vehiculeController.findAll)
routerr.get("/api/vehicule/:id", vehiculeController.findOne);
routerr.put("/api/vehicule/:id", vehiculeController.update);
routerr.delete("/api/vehicule/:id", vehiculeController.delete);
routerr.delete("/api/vehicule", vehiculeController.deleteAll);

module.exports = routerr;