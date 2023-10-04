const express=require('express');
const connectdb=require('./connect')
const app=express();
app.use(express.json());
app.get("",async(req,res)=>{
    let data= await connectdb("express_js","product1");
    let ans=await data.find().toArray();
    res.send(ans);
});
app.post("",async(req,res)=>{
    let data=await connectdb("express_js","product1");
    let result=await data.insertMany(req.body);
    console.log(result);
});

app.listen(4000);