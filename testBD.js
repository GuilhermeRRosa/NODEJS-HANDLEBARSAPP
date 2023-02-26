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

//Test ORM
const MyTable = sequelize.define('tabelaDeDados', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

MyTable.create({
    titulo: "Teste de titulo",
    conteudo: "ASDASDasdasdasdasdas asdasdasdasdasdasdasdqwdqwwqdaz asdwqwdqwdasdasdasdasd"
})

// MyTable.sync({force: true}).then(() => {
//     console.log("Banco atualizado com sucesso")
// }).catch((erro)=> {
//     console.log("Erro ao atualizar banco: "+erro)
// })