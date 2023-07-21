const { findBookingById, updateBooking, deleteBookingById, deleteAllBookings, findAllBookings, createBooking } = require("../../services/booking.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        date: req.body.date,
        passenger: req.body.passenger,
        trip: req.body.trip,
        payment: req.body.payment,
        adults: req.body.adults,
        kids: req.body.kids
    }

    createBooking(patient, res)
};

exports.findAll = (req, res) => {

    findAllBookings(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findBookingById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateBooking(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteBookingById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllBookings(req, res)
};