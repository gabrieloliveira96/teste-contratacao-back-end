'use strict'
const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variaveis = require("./config/variaveis")

const User = require("./../app/models/login-model");
const Cat = require("./../app/models/cat-model");
const Dog = require("./../app/models/dog-model");

app.use(cors());

//conexao com o banco
mongoose.connect(variaveis.Database.connection, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then((data) => {
    console.log("DB Connected")
  })
  .catch((err) => {
    console.log(err)
  })


//config de parse de JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//rotas
const routeLogin = require('./Routes/login');
const routeListCat = require('./Routes/cat');
const routeListDog = require('./Routes/dog');


//config rotas
app.use('/api/login', routeLogin);
app.use('/api/listCat', routeListCat);
app.use('/api/listDog', routeListDog);


module.exports = app;
