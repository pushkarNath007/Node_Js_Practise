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
    res.status(200).render('form.pug');
})

let male;
app.post("/",(req,res)=>{
    let detail=req.body;
    // let gender=detail.gender;
    console.log(detail);
    
    if(detail.genderM){
        console.log("male")
       male="male"; 
    }
    else {
        console.log("female");
        male="female";
    }
    res.status(200).render('form.pug');
})

app.listen(port,hostname,()=>{
    console.log(`http://${hostname}`);
})
