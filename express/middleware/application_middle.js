const express=require('express')
const path=require("path")
const app=express()
const folder=path.join(__dirname,"../make_html_pages");

const reqFilter=(req,res,next)=>{
    // console.log("filter");
    if(!req.query.age){
        res.send("<h1>page not found enter your age</h1>");
    }
    else{
        next();
    }
    
}
// console.log(folder);
 app.use(reqFilter);
app.get("",(req,res)=>{
    res.sendFile(`${folder}/index.html`);
})
app.get("/about",(req,res)=>{
    res.sendFile(`${folder}/about.html`);
})
app.listen(5000);
