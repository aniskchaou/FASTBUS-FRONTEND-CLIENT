const { findPassengerById, updatePassenger, deletePassengerById, deleteAllPassengers, findAllPassengers, createPassenger } = require("../../services/passenger.services");



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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        telephone: req.body.telephone
    }

    createPassenger(patient, res)
};

exports.findAll = (req, res) => {

    findAllPassengers(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPassengerById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePassenger(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePassengerById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPassengers(req, res)
};