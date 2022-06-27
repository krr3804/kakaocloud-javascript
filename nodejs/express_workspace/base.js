var express = require('express');

var app = express();

app.use((req,res) => {
    res.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});