const Offer = require("../models/offer.models");

exports.findAllOffers = (res) => {

    Offer.findAll({})
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

exports.createOffer = (income, res) => {
    Offer.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Offer."
            });
        });
}

exports.findOfferById = (id) => {
    Offer.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Offer with id=" + id
            });
        });
}

exports.deleteOfferById = (id, res) => {
    Offer.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Offer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Offer with id=${id}. Maybe Offer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Offer with id=" + id
            });
        });
}

exports.updateOffer = (id, req, res) => {
    Offer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Offer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Offer with id=${id}. Maybe Offer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Offer with id=" + id
            });
        });
}

exports.deleteAllOffers = () => {
    Offer.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Offer were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}