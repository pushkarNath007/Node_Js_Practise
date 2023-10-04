const express =require('express');
const app=express();
app.get("",(req,res)=>{
    res.send("<h1>hello rishab</h1> <h2>hey how are you</h2>");
   
}).listen(5000);