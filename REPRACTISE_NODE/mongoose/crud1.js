const express=require('express');
const app=express();
const connectdb=require('./connectingdb');
app.use(express.json());
app.post("",async(req,res)=>{
   const data= await connectdb("mongoosedb1","pr1");
   const check=await data.collection.insertOne(req.body);
   console.log(check);
})
 app.get("",async(req,res)=>{
    const data=  await connectdb('mongoosedb1','pr1');
    const result= await data.find();
    res.send(result);
 })
 app.listen(6000);