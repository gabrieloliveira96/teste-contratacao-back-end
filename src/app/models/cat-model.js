'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String
    },
    sobrenome:{
        type:String
    },
    telefone:{
        type:String
    },
     seguidores:{
        type: String
    },
    projetos:{
        type:String
    },
    seguidos:{
        type:String
    },
    cidade:{
        type:String
    },
    estado:{
        type:String
    },

    photo:{
        type:String
    },
    bio:{
        type:String
    }
},{ _id: true, autoIndex: true })

const Cats = mongoose.model("Cats", schema);

module.exports = Cats;