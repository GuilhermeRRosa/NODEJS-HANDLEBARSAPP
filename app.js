import express from 'express';
import { engine, create } from 'express-handlebars';

const app = express();
const PORT = 8081

/* 
    Configuração para o handlebars ler arquivos *.hbs
*/
app.engine('.hbs', engine({
    layoutsDir: "./views/layouts",
    extname: '.hbs',
}));
app.set('view engine', 'hbs')
app.set('views', 'views')

/* 
    os arquivos que vão ser renderizados são os que estão dentro de 
    /views. O handlebars utiliza os templates em /views/layouts em 
    conjunto com os arquivos separados em /views/partials
*/
app.get('/', function(req, res){
    res.render('home', {
        title: "NodeApp handlebars",
        engine: "handlebars"
    })
})

app.use(express.static('public'))

app.listen(8081, () => {
    console.log(`Server up on port: ${PORT}`)
})