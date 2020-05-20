'use strict'
const app = require('./bin/express.js')
const variaveis = require('./bin/config/variaveis');

app.listen(variaveis.Api.port,()=>{
    console.log('Api rodando '+ variaveis.Api.port + '.');
})
// app.get('/',(req,res)=>{
//     res.status(200).send("api rodando com sucesso");
// })



