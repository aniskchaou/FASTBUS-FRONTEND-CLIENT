const { findDestinationById, updateDestination, deleteDestinationById, deleteAllDestinations, findAllDestinations, createDestination } = require("../../services/destination.services");



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
        city: req.body.city,
        description: req.body.description,
        status: req.body.status
    }

    createDestination(patient, res)
};

exports.findAll = (req, res) => {

    findAllDestinations(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findDestinationById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateDestination(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDestinationById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllDestinations(req, res)
};