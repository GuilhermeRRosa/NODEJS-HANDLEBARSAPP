const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "172.17.0.2",
    dialect: 'mysql'
})

//Tenta a conexão com o BD utilizando sequelize
sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar ao banco de dados: "+erro)
})