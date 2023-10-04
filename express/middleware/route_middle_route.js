const express=require('express')
const path=require("path")
const app=express()
// const reqFilter=require('./reqFilter')
const folder=path.join(__dirname,"../make_html_pages");
const Router=express.Router();
const func=(req,res,next)=>{
    // console.log("filter");
    if(!req.query.age){
        res.send("<h1>page not found enter your age</h1>");
    }
    else{
        next();
    }
}
// app.use(Router);
Router.use(func);
// console.log(folder);
//  app.use(reqFilter);
app.get("",(req,res)=>{
    res.sendFile(`${folder}/index.html`);
})
Router.get("/about",(req,res)=>{
    res.sendFile(`${folder}/about.html`);
})
Router.get("/contact",(req,res)=>{
    res.send("<h1>this is contact page</h1>")
})
Router.get("/info",(req,res)=>{
    res.send("<h1>this is info page</h1>")
})
// Router.listen(5000);
app.listen(5000);