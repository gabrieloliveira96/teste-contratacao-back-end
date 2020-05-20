'use strict'

const express = require("express");
const app = express();
const Dogs = require('./../models/dog-model');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function controleDog() {
}

controleDog.prototype.get = async (req, res) => {
    await Dogs.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        })

};

module.exports = controleDog;