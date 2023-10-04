const  express=require('express');
const  connectdb=require("./sch");
const app=express();
const data=connectdb("mongoosedb1","pr1");
app.get("/:key",async(req,res)=>{
    let resp = await data.find(
    {
        "name":{$regex:req.params.key}
    })
    res.send(resp);
}).listen(8000);