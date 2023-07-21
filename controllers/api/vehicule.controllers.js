const { findVehiculeById, updateVehicule, deleteVehiculeById, deleteAllVehicules, findAllVehicules, createVehicule } = require("../../services/vehicule.services");



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
        registration: req.body.registration,
        year: req.body.year,
        engine: req.body.engine,
        type: req.body.type,
        model: req.body.model,
        chassis: req.body.chassis,
        owner: req.body.owner,
        brand: req.body.brand,
    }

    createVehicule(patient, res)
};

exports.findAll = (req, res) => {

    findAllVehicules(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findVehiculeById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateVehicule(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteVehiculeById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllVehicules(req, res)
};