const express=require('express');
const mongoose=require('mongoose');
const app= express();
mongoose.connect("mongodb://localhost:27017/mongoosedb1");
const sch=new mongoose.Schema({
    name:String
})
app.get("/:yo",async(req,res)=>{
    const data=  mongoose.model("pr1",sch);
    const result=await data.find({
        "name":{$regex:req.params.yo}
    });
    res.send(result);
})
app.listen(5000);

