const express=require('express');
const EventEmitter=require('events');
const { appendFile } = require('fs');
const event= new EventEmitter();
const app=express();
let newdate ;
event.on("fire",()=>{
    let date=new Date();
    newdate=date;
})

app.get("/home",async(req,res)=>{
    event.emit("fire");
    res.status(200).send(newdate);
})
app.get("*",(req,res)=>{
    res.send("<h1> sorry wrong url</h1>");
})
app.listen(5000);