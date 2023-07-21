const Station = require("../models/station.models");

exports.findAllStations = (res) => {

    Station.findAll({})
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

exports.createStation = (income, res) => {
    Station.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Station."
            });
        });
}

exports.findStationById = (id) => {
    Station.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Station with id=" + id
            });
        });
}

exports.deleteStationById = (id, res) => {
    Station.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Station was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Station with id=${id}. Maybe Station was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Station with id=" + id
            });
        });
}

exports.updateStation = (id, req, res) => {
    Station.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Station was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Station with id=${id}. Maybe Station was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Station with id=" + id
            });
        });
}

exports.deleteAllStations = () => {
    Station.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Station were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}