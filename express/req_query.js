const express=require('express')
const app=express();
app.get("",(req,res)=>{
    res.send("hello"+JSON.stringify(req.query));
    console.log(req.query);
})
app.listen(4000);