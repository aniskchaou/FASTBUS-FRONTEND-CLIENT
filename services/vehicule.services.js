const Vehicule = require("../models/vehicule.models");

exports.findAllVehicules = (res) => {

    Vehicule.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createVehicule = (income, res) => {
    Vehicule.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehicule."
            });
        });
}

exports.findVehiculeById = (id) => {
    Vehicule.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vehicule with id=" + id
            });
        });
}

exports.deleteVehiculeById = (id, res) => {
    Vehicule.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehicule was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Vehicule with id=${id}. Maybe Vehicule was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vehicule with id=" + id
            });
        });
}

exports.updateVehicule = (id, req, res) => {
    Vehicule.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehicule was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vehicule with id=${id}. Maybe Vehicule was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vehicule with id=" + id
            });
        });
}

exports.deleteAllVehicules = () => {
    Vehicule.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Vehicule were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}