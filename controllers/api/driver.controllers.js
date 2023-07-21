const { findDriverById, updateDriver, deleteDriverById, deleteAllDrivers, findAllDrivers, createDriver } = require("../../services/driver.services");



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
        license: req.body.license
    }

    createDriver(patient, res)
};

exports.findAll = (req, res) => {

    findAllDrivers(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findDriverById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateDriver(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDriverById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllDrivers(req, res)
};