import express from "express";
import { create, engine } from "express-handlebars";

const app = express();
const PORT = 8081

// Configurando handlebars como view engine

/* 
padrão de pasta das views
    .
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars 
*/

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', "./views");

app.get('/', function(req, res){
    res.render('home', {
        var: "var from backend"
    })
})

app.listen(PORT, () => {
    console.log(`Server up to html://localhost:${PORT}`)
})