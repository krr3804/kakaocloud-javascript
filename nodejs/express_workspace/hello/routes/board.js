const { deepEqual } = require('assert');
var express = require('express');
var router = express.Router();
var fs = require("fs");

var boardData = [
    {id:0, title:"제목1", writer:"작성자1", contents:"내용1", wdate:"2022-06-28"},
    {id:1, title:"제목2", writer:"작성자2", contents:"내용2", wdate:"2022-06-28"},
    {id:2, title:"제목3", writer:"작성자3", contents:"내용3", wdate:"2022-06-28"},
    {id:3, title:"제목4", writer:"작성자4", contents:"내용4", wdate:"2022-06-28"},
    {id:4, title:"제목5", writer:"작성자5", contents:"내용5", wdate:"2022-06-28"},
  ]

//Get home page.
router.get('/',function(req,res,next) {
    //ejs파일의 경로가 views로 확정, 확장자 ejs로 확정

    res.redirect("/board/list");
})
//RESTful api 서버 - 데이터를 json으로 주고받는 서버
//안드로이드, react, vue, angular, 폴리머...
//직접 데이터베이스에 접근해서 데이터 읽고 쓰기를 하지 않는다
//안드로이드는 애초에 디비 클라이언트를 올려놓을 수 가 없다
//react나 vue는 nodejs기반이라 쓰자면 쓸 수 있지만
//MVW 방식에서는 직접 데이터베이스에 접근 불가능하게
//백엔드가 대신 데이터베이스로부터 데이터를 받아 전달한다
//데이터만 전달하는 서버 - nodejs는 애초에 json
router.get("/view/:id",(req, res) => {
    res.render("./board/board_view.ejs",{boardItem : boardData[parseInt(req.params.id)]});
})

router.get("/list",(req,res) => {
    res.render('list.ejs',{boardList : boardData});
})

router.get("/write",(req,res) => {
    res.render('./board/board_write.ejs');
})

router.post("/save",(req,res) => {
     boardData.push({
        id : boardData.length,
        title : req.body.title,
        writer : req.body.writer,
        contents : req.body.contents,
        wdate : req.body.wdate
    });
    res.redirect('/board/list');
})

router.post('/delete',(req,res) => {
    var arr = req.body.box;
    if(arr != []) {
        for(i = arr.length-1; i >= 0; i--) {
            console.log(arr[i]);
            if(arr[i] > -1) {
                boardData.splice(arr[i],1);
            }
        };
        var index = 0;
        boardData.forEach(item => {
            item.id = index++;
        });
    }
    res.redirect('/board/list');
})

module.exports = router;