var express = require("express");
var router = express.Router();
var ejs = require("ejs");
var fs = require("fs");

router.get('/',(req,res) => {
    res.redirect("/board/list"); //다른 url로 redirect
});

router.get('/list',(req,res) => {
    fs.readFile("./view/board_list.ejs", "utf-8",(error,data) => {
        if(error) {
            console.log("file not found");
            res.send("<h1>File not found</h1>");
            return;
        }
        res.send(ejs.render( data ));
    })
})

router.get("/view/:name/:age/:phone",(req,res) => {
    fs.readFile("./view/board_view.ejs","utf-8",(error,data) => {
        if(error) {
            console.log("file not found");
            res.send("<h1>File not found</h1>");
            return;
        }

        res.send(ejs.render(data, {
            name : req.params.name,
            age : req.params.age,
            phone : req.params.phone
        }));
    })
})

//http://127.0.0.1:4000/board/view/tom/23/010-5000-3000


module.exports = router;
