const { findPriceById, updatePrice, deletePriceById, deleteAllPrices, findAllPrices, createPrice } = require("../../services/price.services");



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

        route: req.body.route,
        price: req.body.price,
        kidsPrice: req.body.kidsPrice,
        specialPrice: req.body.specialPrice,
    }

    createPrice(patient, res)
};

exports.findAll = (req, res) => {

    findAllPrices(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPriceById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePrice(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePriceById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPrices(req, res)
};