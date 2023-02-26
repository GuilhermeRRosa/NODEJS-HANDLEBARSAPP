const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('Hellooo')
})

app.get('/index', function(req, res){
    res.sendFile(__dirname+"/html/index.html")
})

app.listen(8081, function(){
    console.log("server up!")
})