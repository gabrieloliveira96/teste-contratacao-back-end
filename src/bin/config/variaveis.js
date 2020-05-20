const variaveis = {
    Api:{
        port : process.env.port || 8080
    },
    Database:{
        connection: process.env.connection ||("mongodb+srv://admin123:admin123@cluster0-hvqg2.mongodb.net/test?retryWrites=true&w=majority")
    }
}

module.exports = variaveis;