const { findStationById, updateStation, deleteStationById, deleteAllStations, findAllStations, createStation } = require("../../services/station.services");



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
        name: req.body.name,
        address: req.body.address,
        city: req.body.city
    }

    createStation(patient, res)
};

exports.findAll = (req, res) => {

    findAllStations(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findStationById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateStation(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteStationById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllStations(req, res)
};