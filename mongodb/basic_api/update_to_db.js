const express=require('express');
const mongodb = require('mongodb');
const connectdb=require("../dataconnectfile");
const app=express();

app.use(express.json());

app.get("",async(req,res)=>{
    let data= await connectdb("express_js","product1");
    let final=await data.find().toArray();
    res.send(final);
    console.log(final);
})
app.post("", async(req,res)=>{
    let data=await connectdb("express_js","product1");
    let result=await data.insertOne(req.body);
    // res.send({name:"supriya"});
    console.log(result);
})
app.put("/:name",async(req,res)=>{
    // res.send({name:"yoyo"});
    let data=await connectdb("express_js","product1");
    await data.updateMany({name:req.params.name},{$set:req.body});
})
app.delete("/:_id",async(req,res)=>{
    let data=await connectdb("express_js","product1");
    await data.deleteOne({_id:mongodb.ObjectId(req.params._id)});
})
app.listen(5000);