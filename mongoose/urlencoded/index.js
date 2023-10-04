const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const hostname="127.0.0.1";
new mongoose.connect("mongodb://localhost:27017/mongoosedb1");
const sch=new mongoose.Schema({
    name:String,
    age:String,
    class:String
});
console.log(__dirname);
const app=express();
app.use(express.urlencoded());
app.get("",(req,res)=>{
    // res.writeHead(200,{'content-type':'text/html'});
    res.sendFile(`${__dirname}/base.html`);
})
app.post("",async(req,res)=>{
    const data=mongoose.model('pr1',sch);
    // console.log(req.body);
    // console.log(result);
    // let check=await result.save();
    // res.send(check);
    let result=new data(req.body);
    let check=await result.save();
    console.log(check);
})

app.listen(80,()=>{
    console.log(` website successfully launch at http://${hostname}`);
});
