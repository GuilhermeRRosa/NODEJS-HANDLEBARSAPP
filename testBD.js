const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_study', 'root', 'root', {
    host: "localhost",
    port: "61931",
    dialect: 'mysql'
})

//Tenta a conexão com o BD utilizando sequelize
sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar ao banco de dados: "+erro)
})

//Test ORM
async function defineTabelaDeDados(){
    const MyTable = sequelize.define('tabelaDeDados', {
        titulo: {
            type: Sequelize.STRING
        },
        conteudo: {
            type: Sequelize.TEXT
        }
    })

    try {
        await MyTable.sync()
    } catch (error) {
        console.log("ERRO AI KRAI")
    }
    return MyTable
}

defineTabelaDeDados().then(function(table){
    console.log("tabela sincronizada")

    table.create({
        titulo: "Teste de titulo",
        conteudo: "ASDASDasdasdasdasdas asdasdasdasdasdasdasdqwdqwwqdaz asdwqwdqwdasdasdasdasd"
    })
})



