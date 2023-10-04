const express=require('express');
const path=require('path');
const app=express();
const folder=path.join(__dirname);
console.log(folder);

app.set("view engine","ejs");

app.get("",(req,res)=>{
    res.sendFile(`${folder}/index.html`);
})
// example of ejs
app.get("/profile",(req,res)=>{
    const obj={
        name:"pushkar",
        class:2,
        age:20
    }
    res.render("profile",{obj});
})
app.get("/about",(req,res)=>{
    res.sendFile(`${folder}/about.html`);
})
app.listen(5000);