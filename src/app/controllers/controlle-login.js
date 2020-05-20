'use strict'
const express = require("express");
const app = express();
const User = require('./../models/login-model');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function controleLogin() {
}

controleLogin.prototype.post = async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    await User.findOne({ email: user.email })
        .then(data => {
            let checkPassword = data.password;
            if (user.password === checkPassword) {
                let sendUser = new User({
                    nome: data.nome,
                    sobrenome: data.sobrenome,
                    email: data.email,
                    cidade: data.cidade,
                    estado: data.estado,
                    photo: data.photo
                })
                console.log(sendUser)
                res.status(200).json(sendUser);
            } else {
                res.status(403).json({ success: false, message: "Senha incorreta" })
                console.log("senhas incorretas");
            }
        })
        .catch(err => {
            res.status(403).json({ success: false, message: "Email não encontrado" })
            console.log('email nao encontrado');
        })


}
module.exports = controleLogin;