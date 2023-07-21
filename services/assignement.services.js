const Assignement = require("../models/assignement.models");

exports.findAllAssignements = (res) => {

    Assignement.findAll({})
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

exports.createAssignement = (income, res) => {
    Assignement.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Assignement."
            });
        });
}

exports.findAssignementById = (id) => {
    Assignement.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Assignement with id=" + id
            });
        });
}

exports.deleteAssignementById = (id, res) => {
    Assignement.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Assignement was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Assignement with id=${id}. Maybe Assignement was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Assignement with id=" + id
            });
        });
}

exports.updateAssignement = (id, req, res) => {
    Assignement.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Assignement was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Assignement with id=${id}. Maybe Assignement was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Assignement with id=" + id
            });
        });
}

exports.deleteAllAssignements = () => {
    Assignement.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Assignement were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}