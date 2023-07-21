const { findAssignementById, updateAssignement, deleteAssignementById, deleteAllAssignements, findAllAssignements, createAssignement } = require("../../services/assignement.services");



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
        travel: req.body.travel,
        vehicule: req.body.vehicule,
        date: req.body.date,
        driver: req.body.driver
    }

    createAssignement(patient, res)
};

exports.findAll = (req, res) => {

    findAllAssignements(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findAssignementById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateAssignement(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteAssignementById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllAssignements(req, res)
};