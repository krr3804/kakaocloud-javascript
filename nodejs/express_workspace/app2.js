var express = require('express');

var app = express();

app.use("/",(req,res) => {
    //브라우저 정보 확인
    console.log(req);
    var agent = req.header("User-Agent");
    console.log(agent);

    //패턴 매치(정규식)
    if(agent.toLowerCase().match(/chrome/) && !agent.toLowerCase().match(/edg/)) {
        res.send("agent is 크롬");
    } else {
        res.send("agent is " + agent);
    }
})

app.listen(4000, function() {
    console.log("server start http://127.0.0.1:4000");
});