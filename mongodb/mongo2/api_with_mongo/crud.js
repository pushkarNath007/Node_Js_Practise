const express=require('express');
const connectdb=require('./connect');
const mongodb = require('mongodb');

const app=express();
app.use(express.json());
app.get("",async(req,res)=>{
    let  data=await connectdb('mongoosedb1','pr1');
    let result=await data.find().toArray();
    res.send(result);
})
app.post("",async(req,res)=>{
    let  data=await connectdb('mongoosedb1','pr1');
    let result=await data.insertOne(req.body);
    res.send(result);
})
app.put("/:_id",async(req,res)=>{
    let  data=await connectdb('mongoosedb1','pr1');
    let result= await data.updateOne({_id:mongodb.ObjectId(req.params._id)},{$set:req.body});
    res.send(result);
    console.log(req.params);
})
app.delete("/:_id",async(req,res)=>{
    let  data=await connectdb('mongoosedb1','pr1');
    // console.log(req.params);
    let result=await data.deleteOne({_id:mongodb.ObjectId(req.params._id)});
    
})
app.listen(5000);