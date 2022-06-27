var express = require('express');

var app = express();

//get방식 파라미터 처리하기
app.get("/userinfo",(req,res) => {
    console.log(req.query);
    //get방식만
    var name = req.query.name;
    var age = req.query.age;

    res.send(`<h1>${name} ${age}</h1>`);
});

app.get("/array",(req,res) => {
    console.log(req.query);
    //get방식만
    var arr = req.query.arr;

    var result = "";
    for(i in arr) {
        result += `${arr[i]}<br/>`;
    }

    res.send(result);
});

app.use((req,res) => {
    res.status(404).send(`<h1>Error</h1>`);
});



app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});