const Route = require("../models/route.models");


exports.searchRoute = (from, to, date, persons, res) => {
    Route.findOne({ where: { from: from, to: to, date: date, persons: persons } })
        .then(data => {

            //config.user = data
            console.log(data)
            if (data === null) {
                res.send({});
            } else {
                res.render("elements/search", { viewTitle: 'FastBus' });
            }

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}


exports.findAllNotes = (res) => {

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

exports.createNote = (income, res) => {
    Route.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Note."
            });
        });
}

exports.findNoteById = (id) => {
    Route.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Note with id=" + id
            });
        });
}

exports.deleteNoteById = (id, res) => {
    Route.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Note was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Note with id=${id}. Maybe Note was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Note with id=" + id
            });
        });
}

exports.updateNote = (id, req, res) => {
    Route.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Note was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Note with id=${id}. Maybe Note was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Note with id=" + id
            });
        });
}

exports.deleteAllNotes = () => {
    Route.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Note were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}