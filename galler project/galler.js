const express=require('express');
const fs=require('fs/promises');
const path=require("path")
const app=express();
// console.log(app);
const hostname='127.0.0.1';
const port=80;
// const gallery= fs.readFile("/galleryproject.html");
app.get("/",(req,res)=>{
    // res.writeHead(200,{'Content-type':"text/html"});
    res.sendFile( __dirname+"/galleryproject.html")
});
app.listen(port,hostname,()=>{
    console.log(` website successfully launch at http://${hostname}`);
})