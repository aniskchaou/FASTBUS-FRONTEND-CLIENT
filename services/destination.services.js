const Destination = require("../models/destination.models");

exports.findAllDestinations = (res) => {

    Destination.findAll({})
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

exports.createDestination = (income, res) => {
    Destination.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Destination."
            });
        });
}

exports.findDestinationById = (id) => {
    Destination.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Destination with id=" + id
            });
        });
}

exports.deleteDestinationById = (id, res) => {
    Destination.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Destination was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Destination with id=${id}. Maybe Destination was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Destination with id=" + id
            });
        });
}

exports.updateDestination = (id, req, res) => {
    Destination.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Destination was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Destination with id=${id}. Maybe Destination was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Destination with id=" + id
            });
        });
}

exports.deleteAllDestinations = () => {
    Destination.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Destination were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}