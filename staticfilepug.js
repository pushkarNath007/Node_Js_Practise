const express=require("express");
const path = require("path");
const app=express();
app.use('/static',express.static("static"));
app.set('view engine','pug');
app.set('views',path.join(__dirname));
app.get("/",(req,res)=>{
    res.status(200).render('demo');
});
app.listen(80,'127.0.0.1',()=>{
    console.log("success");
})