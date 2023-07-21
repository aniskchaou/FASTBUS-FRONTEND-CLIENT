const Travel = require("../models/travel.models");

exports.findAllTravels = (res) => {

    Travel.findAll({})
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

exports.createTravel = (income, res) => {
    Travel.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Travel."
            });
        });
}

exports.findTravelById = (id) => {
    Travel.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Travel with id=" + id
            });
        });
}

exports.deleteTravelById = (id, res) => {
    Travel.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Travel was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Travel with id=${id}. Maybe Travel was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Travel with id=" + id
            });
        });
}

exports.updateTravel = (id, req, res) => {
    Travel.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Travel was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Travel with id=${id}. Maybe Travel was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Travel with id=" + id
            });
        });
}

exports.deleteAllTravels = () => {
    Travel.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Travel were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}