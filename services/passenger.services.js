const Passenger = require("../models/passenger.models");

exports.findAllPassengers = (res) => {

    Passenger.findAll({})
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

exports.createPassenger = (income, res) => {
    Passenger.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Passenger."
            });
        });
}

exports.findPassengerById = (id) => {
    Passenger.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Passenger with id=" + id
            });
        });
}

exports.deletePassengerById = (id, res) => {
    Passenger.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Passenger was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Passenger with id=${id}. Maybe Passenger was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Passenger with id=" + id
            });
        });
}

exports.updatePassenger = (id, req, res) => {
    Passenger.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Passenger was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Passenger with id=${id}. Maybe Passenger was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Passenger with id=" + id
            });
        });
}

exports.deleteAllPassengers = () => {
    Passenger.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Passenger were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}