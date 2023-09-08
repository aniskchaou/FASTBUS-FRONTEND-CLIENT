var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var seed = require("./seeds.sequelize")
var Route = require("../models/route.models.js");
const HomePage = require("../models/home.page.models.js");
const ContactPage = require("../models/contact.models.js");
const DestinationPage = require("../models/destination.page.models.js");
const FooterPage = require("../models/footer.page.models.js");
const SystemSettings = require("../models/system.settings.models.js");
const City = require("../models/city.models.js");
const DashboardSettings = require("../models/settings/dashboard.settings.models.js");
const EmailSettings = require("../models/settings/email.settings.models.js");
const FooterSettings = require("../models/settings/footer.settings.models.js");
const HeaderSettings = require("../models/settings/header.settings.models.js");
const NotificationSettings = require("../models/settings/notification.settings.models.js");
const LocalisationSettings = require("../models/settings/localisation.settings.models.js");

const Travel = require("../models/travel.models.js");
const Vehicule = require("../models/vehicule.models.js");
const Station = require("../models/station.models.js");
const Pasenger = require("../models/passenger.models.js");
const Price = require("../models/price.models.js");
const Offer = require("../models/offer.models.js");
const Driver = require("../models/driver.models.js");
const Booking = require("../models/booking.models.js");
const Assign = require("../models/assignement.models.js");

sequelize.sync().then(function () {
    User.create(seed.userSeed);
    HomePage.create(seed.homePageSeed)
    ContactPage.create(seed.contactPageSeed)
    DestinationPage.create(seed.destinationPageSeed)
    FooterPage.create(seed.footerSeed)
    SystemSettings.create(seed.getSytemSettings())


    DashboardSettings.create(seed.getDashboardSettings())
    EmailSettings.create(seed.getEmailSettings())
    FooterSettings.create(seed.getFooterSettings())
    HeaderSettings.create(seed.getHeaderSettings())
    LocalisationSettings.create(seed.getLocalisationSettings())
    NotificationSettings.create(seed.getNotificationSettings())
    City.bulkCreate(seed.citiesSeed)
    Route.bulkCreate(seed.routeSeeds)
    Assign.create(seed.assignementsSeeds)
    Booking.create(seed.bookingSeeds)
    Driver.create(seed.driverSeeds)
    Offer.create(seed.offerSeeds)
    Price.create(seed.priceSeeds)
    Pasenger.create(seed.passengerSeeds)
    Station.create(seed.stationSeeds)
    Vehicule.create(seed.vehiculeSeeds)
    Travel.create(seed.travelSeeds)
}).then(function (res) {
    console.log(res.get({ plain: true }));
});

