'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    nome: {
        type: String,
    },
    sobrenome: {
        type: String,
    },
    cidade: {
        type: String,
    },
    estado: {
        type: String,
    },
    photo: {
        type: String,
    }
}, { _id: true, autoIndex: true })

const User = mongoose.model("Usuarios", schema);

module.exports = User;