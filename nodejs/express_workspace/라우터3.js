var express = require('express');

var app = express();
app.use(express.urlencoded({extended:true}));
//외부 모듈을 불러온다
var board = require("./router/board");

app.use('/board', board); //http://127.0.0.1:4000/board

app.use((req,res) => {
    res.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});