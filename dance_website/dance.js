const express=require('express')
const fs=require('fs');
const { request } = require('http');
const path=require("path")
const port= 80;
const hostname='127.0.0.1';
const app=express();
app.use(express.urlencoded());
app.use('/static',express.static('static'));
app.set('view engine','pug');
app.set('views',path.join(__dirname));
app.get("/",(req,res)=>{
    res.status(200).render("danceweb.pug");
})
app.post("/",(req,res)=>{
    const data=req.body;
    console.log(data);
    res.status(200).render("danceweb.pug");
})
app.listen(port,()=>{
    console.log("web launch successfully");
})

