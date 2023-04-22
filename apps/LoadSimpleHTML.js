import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

//Módulo do Express
const app = express();

// método para capturar definir no __dirname, 
// definindo variável __filename para a url principal com 'import.meta.url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/index', function(req, res){

    //método para carregar o arquivo html
    res.sendFile(path.join(__dirname, '/html/index.html'))
})

// inicia o server
app.listen('8081', () => {
    console.log('Server up!');
})