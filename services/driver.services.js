const Driver = require("../models/driver.models");

exports.findAllDrivers = (res) => {

    Driver.findAll({})
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

exports.createDriver = (income, res) => {
    Driver.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Driver."
            });
        });
}

exports.findDriverById = (id) => {
    Driver.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Driver with id=" + id
            });
        });
}

exports.deleteDriverById = (id, res) => {
    Driver.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Driver was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Driver with id=" + id
            });
        });
}

exports.updateDriver = (id, req, res) => {
    Driver.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Driver was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Driver with id=${id}. Maybe Driver was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Driver with id=" + id
            });
        });
}

exports.deleteAllDrivers = () => {
    Driver.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Driver were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}