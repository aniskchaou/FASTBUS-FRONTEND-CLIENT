const { searchRoute } = require("../services/route.services");

var Passenger = require("../models/passenger.models.js")
var Booking = require("../models/booking.models.js");
const City = require("../models/city.models");
const ContactPage = require("../models/contact.models");
const FooterPage = require("../models/footer.page.models");
const SystemSettings = require("../models/system.settings.models");
const DestinationPage = require("../models/destination.page.models");
const HomePage = require("../models/home.page.models");

exports.getPricing = async function (req, res, next) {
  res.render("elements/pricing", { viewTitle: 'Pricing' });
}

exports.getContact = async function (req, res, next) {

  const contactPagePromise = ContactPage.findOne()
  const footerPagePromise = FooterPage.findOne()
  const systemSettingsPromise = SystemSettings.findOne()
  // const homePagePromise = HomePage.findOne()
  /* const testimonialsPromise = TestimonialsPage.findOne()
  const contactPromise = ContactPage.findOne()
  const servicePromise = ServicePage.findOne()
  const serviceItems = ServiceItem.findAll()
 */
  Promise
    .all([contactPagePromise, footerPagePromise, systemSettingsPromise])
    .then(responses => {
      res.render("elements/contact", {
        contacPage: responses[0].dataValues,
        footerPage: responses[1].dataValues,
        systemSettings: responses[2].dataValues
      });
    })
    .catch(err => {
      console.log('**********ERROR RESULT****************');
      console.log(err);
    });





  // res.render("elements/contact", { viewTitle: 'Contact' });
}

exports.getDestination = async function (req, res, next) {
  //res.render("elements/destination", { viewTitle: 'Destination' });

  const destinationPagePromise = DestinationPage.findOne()
  const footerPagePromise = FooterPage.findOne()
  const systemSettingsPromise = SystemSettings.findOne()
  const citiesPromise = City.findAll()
  // const homePagePromise = HomePage.findOne()
  /* const testimonialsPromise = TestimonialsPage.findOne()
  const contactPromise = ContactPage.findOne()
  const servicePromise = ServicePage.findOne()
  const serviceItems = ServiceItem.findAll()
 */
  Promise
    .all([destinationPagePromise, footerPagePromise, systemSettingsPromise, citiesPromise])
    .then(responses => {
      let list = responses[3].map((item) => {
        return { name: item.name, id: item.id }
      });
      res.render("elements/destination", {
        destinationPage: responses[0].dataValues,
        footerPage: responses[1].dataValues,
        systemSettings: responses[2].dataValues,
        cities: list

      });
    })
    .catch(err => {
      console.log('**********ERROR RESULT****************');
      console.log(err);
    });

}

exports.getHome = async function (req, res, next) {
  const homePagePromise = HomePage.findOne()
  const footerPagePromise = FooterPage.findOne()
  const systemSettingsPromise = SystemSettings.findOne()
  const citiesPromise = City.findAll()
  // const homePagePromise = HomePage.findOne()
  /* const testimonialsPromise = TestimonialsPage.findOne()
  const contactPromise = ContactPage.findOne()
  const servicePromise = ServicePage.findOne()
  const serviceItems = ServiceItem.findAll()
 */
  Promise
    .all([homePagePromise, footerPagePromise, systemSettingsPromise, citiesPromise])
    .then(responses => {
      let list = responses[3].map((item) => {
        return { name: item.name, id: item.id }
      });
      console.log(responses[3])
      res.render("elements/index", {
        homePage: responses[0].dataValues,
        contactPage: responses[1].dataValues,
        systemSettings: responses[2].dataValues,
        cities: list
      });
    })
    .catch(err => {
      console.log('**********ERROR RESULT****************');
      console.log(err);
    });





  // res.render("elements/index", { viewTitle: 'FastBus' });
}


exports.getSearch = async function (req, res, next) {
  const citiesPromise = City.findAll()
  const systemSettingsPromise = HomePage.findOne()

  Promise
    .all([citiesPromise, systemSettingsPromise])
    .then(responses => {
      let list = responses[0].map((item) => {
        return { name: item.name, id: item.id }
      });
      searchRoute(req.body.from, req.body.to, req.body.date, req.body.persons, res, list, responses[1])
      console.log(req.body.from + '' + req.body.to + '' + req.body.date + '' + req.body.persons + '' + res)

    })
    .catch(err => {
      console.log('**********ERROR RESULT****************');
      console.log(err);
    });
}

exports.getBooking = async function (req, res, next) {
  console.log(req.params)
  res.render("elements/booking", { viewTitle: 'FastBus', route: req.params.route, price: req.params.price, status: req.params.status, layout: 'booking' });
}

exports.postBooking = async function (req, res, next) {
  // res.render("elements/booking", { viewTitle: 'FastBus' });
  //console.log(req.body)
  const passenger = {
    fullName: req.body.fullName,
    email: req.body.email,
    address: req.body.address
  }
  Passenger.create(passenger)
    .then(data => {
      console.log(data)

      const booking = {
        date: new Date().toString(),
        passenger: req.body.fullName,
        trip: req.body.route,
        adults: 1,
        payment: 'Pending',
        kids: 0
      }
      Booking.create(booking)
        .then(data => {
          res.redirect('/');
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Note."
          });
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    });

  /* */
}



