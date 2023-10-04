const express=require('express');
const {MongoClient}=require('mongodb');
const client= new MongoClient("mongodb://localhost:27017");
const app=express();
app.get("/:key",async(req,res)=>{
    const alldb= await client.connect();
    const connectdb= alldb.db("mongoosedb1");
    const data= await connectdb.collection("pr1");
    const ourdata= await data.find({"name":{$regex:req.params.key}}).toArray();
    res.send(ourdata);
}).listen(4000);