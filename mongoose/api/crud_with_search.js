const func =require('./sch');
const express=require('express');
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const app=express();
// to read data and upload
app.use(express.json());
let data= func('mongoosedb1','pr1');
app.get("/name/:key",async(req,res)=>{
    
    let result=await data.find({
        "$or":[
            // both para has to be same datatype
            // regex work for strings and queries only
            {"name":{$regex: req.params.key}},
            {"class":{$regex: req.params.key}}

        ]
    });
   res.send(result);
    
})
app.post("",async(req,res)=>{
    let ans=new data(req.body);
    let result=await ans.save();
    console.log(result);
    res.send(result);
})
app.delete("/:_id",async(req,res)=>{
    let result= await data.deleteOne(req.params);
    res.send(result);
    // console.log(req.params);
})
app.put("/:_id",async(req,res)=>{
    let result= await data.updateOne(req.params,{$set:req.body});
    res.send(result);

})
app.listen(8000);
