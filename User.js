const Sequelize = require('sequelize');
const db = require('./models/db');

const User = db.define('users',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},

name: {
    type: Sequelize.STRING,
    allowNull: false
},

email: {
    type: Sequelize.STRING,
    allowNull: false
},

});

//cria a tabela caso não exista
//alter deixa que modifiquemos
// User.sync({ alter: true })  << cria mas eu comentei conforme video
//https://www.youtube.com/watch?v=_OeuPAb9bhU&ab_channel=Celke

module.exports = User;