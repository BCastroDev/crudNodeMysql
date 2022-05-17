const  Sequelize  = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('imob', 'Bruno', '12345', {
    host: 'localhost',
    dialect: 'mysql'
}) 


sequelize.authenticate()
.then(function(){
        console.log("Conexão ok")
    })
.catch(console.log("Erro na conexão"))

module.exports = sequelize