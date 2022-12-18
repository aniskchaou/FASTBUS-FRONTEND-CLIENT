const { searchRoute } = require("../services/route.services");

var Passenger = require("../models/passenger.models.js")
var Booking = require("../models/booking.models.js")

exports.getPricing = async function (req, res, next) {
  res.render("elements/pricing", { viewTitle: 'Pricing' });
}

exports.getContact = async function (req, res, next) {
  res.render("elements/contact", { viewTitle: 'Contact' });
}

exports.getDestination = async function (req, res, next) {
  res.render("elements/destination", { viewTitle: 'Destination' });
}

exports.getHome = async function (req, res, next) {
  res.render("elements/index", { viewTitle: 'FastBus' });
}


exports.getSearch = async function (req, res, next) {
  searchRoute(req.body.from, req.body.to, req.body.date, req.body.persons, res)
}

exports.getBooking = async function (req, res, next) {
  res.render("elements/booking", { viewTitle: 'FastBus' });
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
        date: req.body.date,
        passenger: data.id,
        route: req.body.route,
        price: req.body.price,
        status: req.body.status
      }
      Booking.create(booking)
        .then(data => {
          res.send(data);
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



