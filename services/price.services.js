const Price = require("../models/price.models");

exports.findAllPrices = (res) => {

    Price.findAll({})
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

exports.createPrice = (income, res) => {
    Price.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Price."
            });
        });
}

exports.findPriceById = (id) => {
    Price.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Price with id=" + id
            });
        });
}

exports.deletePriceById = (id, res) => {
    Price.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Price was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Price with id=${id}. Maybe Price was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Price with id=" + id
            });
        });
}

exports.updatePrice = (id, req, res) => {
    Price.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Price was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Price with id=${id}. Maybe Price was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Price with id=" + id
            });
        });
}

exports.deleteAllPrices = () => {
    Price.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Price were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}