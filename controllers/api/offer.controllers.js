const { findOfferById, updateOffer, deleteOfferById, deleteAllOffers, findAllOffers, createOffer } = require("../../services/offer.services");



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
        name: req.body.name,
        start: req.body.start,
        end: req.body.end,
        code: req.body.code,
        discount: req.body.discount,
        travel: req.body.travel,
        condition: req.body.condition,
    }

    createOffer(patient, res)
};

exports.findAll = (req, res) => {

    findAllOffers(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findOfferById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateOffer(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteOfferById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllOffers(req, res)
};