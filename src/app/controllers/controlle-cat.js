'use strict'

const express = require("express");
const app = express();
const Cats = require('./../models/cat-model');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function controleCat() {
}

controleCat.prototype.get = async (req, res) => {
    await Cats.find()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports = controleCat;