const mongodb=require('mongodb');
const fs=require('fs');
const path=require('path');
const express=require('express');
const connectdb=require('./connectdb');
const app=express();
// const client= new MongoClient("mongodb://localhost:27017");
app.use(express.json());

app.post("/:name",async(req,res)=>{
    const data=await connectdb("express_js","product1");
    const check=await data.insertOne(req.params);
    console.log(check);
})

app.put("/:name",async(req,res)=>{
    const data=await connectdb("express_js","product1");
    const check=await data.updateOne(req.params,{$set:req.body});
    console.log(check);
})
app.delete("/:_id",async(req,res)=>{
    const data=await connectdb("express_js","product1");
    const check=await data.deleteMany({_id:new mongodb.ObjectId(req.params._id)});
    console.log(check);
})
app.get("",async(req,res)=>{
    const data= await connectdb("express_js","product");
    const result=await data.find().toArray();
    res.send(result);
})
app.listen(8000);