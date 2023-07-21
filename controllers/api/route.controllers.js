const { findRouteById, updateRoute, deleteRouteById, deleteAllRoutes, findAllRoutes, createRoute } = require("../../services/route.services");



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
        from: req.body.from,
        to: req.body.to,
        breakPoints: req.body.breakPoints,
        distance: req.body.distance,
        approximateTime: req.body.approximateTime,
        childSeat: req.body.childSeat,
        start: req.body.start,
        end: req.body.end,
        SpacialSeat: req.body.SpacialSeat
    }

    createRoute(patient, res)
};

exports.findAll = (req, res) => {

    findAllRoutes(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findRouteById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateRoute(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteRouteById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllRoutes(req, res)
};