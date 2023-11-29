const Sequelize = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize({
    username:process.env.USERNAME, 
    password: process.env.PASSWORD, 
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    port: process.env.PORT,
    host: process.env.HOST
});

sequelize
    .authenticate()
    .then( () => {
        console.log("Conectado com sucesso!"); 
    })
    .catch( (err) => {
        console.log("Falha ao se conectar: " + err);
    });

