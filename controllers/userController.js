const db = require("../models");
const passport = require('../config/passport')
// Defining methods for the userController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .populate("goals")
            .sort({ createdAt: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        let newUser = new db.User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        newUser.password = newUser.generateHash(req.body.password);
        db.User
            .create(newUser)
            .then(dbModel => 
               res.redirect(307, '/api/user/login'))
                // res.json(dbModel)})
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};