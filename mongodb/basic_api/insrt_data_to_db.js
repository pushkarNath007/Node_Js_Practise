const express=require('express');
const connectdb=require("../dataconnectfile");
const app=express();

app.use(express.json());

app.get("",async(req,res)=>{
    let data= await connectdb("express_js","product");
    let final=await data.find().toArray();
    res.send(final);
    console.log(final);
})
app.post("", async(req,res)=>{
    let data=await connectdb("express_js","product");
    let result=await data.insertOne(req.body);
    // res.send({name:"supriya"});
    console.log(result);
})
app.listen(5000);