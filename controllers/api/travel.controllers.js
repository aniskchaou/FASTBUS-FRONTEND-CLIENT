const { findTravelById, updateTravel, deleteTravelById, deleteAllTravels, findAllTravels, createTravel } = require("../../services/travel.services");



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
        title: req.body.title,
        type: req.body.type,
        route: req.body.route,
        date: req.body.date,
        price: req.body.price
    }

    createTravel(patient, res)
};

exports.findAll = (req, res) => {

    findAllTravels(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findTravelById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateTravel(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTravelById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllTravels(req, res)
};