const connectdb =require('./connect')
const express =require('express');
const app=express();

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 
app.get('/pushkarnath', async(req,res)=>{
    const data= await connectdb("express_js","product1");
    const resp=await data.find().toArray();
    res.send(resp);
    console.warn(resp);
})
app.listen(5000);