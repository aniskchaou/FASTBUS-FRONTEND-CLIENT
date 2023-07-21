const Route = require("../models/route.models");
const City = require("../models/city.models");

exports.searchRoute = (from, to, date, persons, res, cities, system) => {
    //Route.findOne({ where: { from: from, to: to, date: date, persons: persons } })
    Route.findOne({ where: { from: from, to: to } })
        .then(data => {

            console.log('--------------------')
            console.log(data)
            console.log('-------------------')
            /*  if (data === null) {
                 res.render("elements/index", { viewTitle: 'FastBus', cities: cities })
             } else {
                 res.render("elements/search", { viewTitle: 'FastBus', routess: data, cities: cities });
             } */
            console.log('----------------------')
            console.log(system)
            console.log('----------------------')

            res.render("elements/search", { viewTitle: 'FastBus', routess: data, cities: cities, sys: system });

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}


exports.findAllRoutes = (res) => {

    Route.findAll({})
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

exports.createRoute = (income, res) => {
    Route.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Route."
            });
        });
}

exports.findRouteById = (id) => {
    Route.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Route with id=" + id
            });
        });
}

exports.deleteRouteById = (id, res) => {
    Route.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Route was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Route with id=${id}. Maybe Route was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Route with id=" + id
            });
        });
}

exports.updateRoute = (id, req, res) => {
    Route.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Route was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Route with id=${id}. Maybe Route was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Route with id=" + id
            });
        });
}

exports.deleteAllRoutes = () => {
    Route.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Route were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.findCityById = (id) => {
    City.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Route with id=" + id
            });
        });
}