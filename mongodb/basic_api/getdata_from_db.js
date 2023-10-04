const connectdb=require("../dataconnectfile");
const express=require('express');
const app=express();

app.get("",async(req,res)=>{
    let data= await connectdb("express_js","product");
    let final=await data.find().toArray();
    res.send(final);
    console.log(final);
})
app.listen(8000);