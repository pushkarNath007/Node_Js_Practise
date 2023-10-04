const express=require('express');
const { listenerCount } = require('process');
const path=require('path');
const app = express();
const folder=path.join(__dirname);
app.set('view engine','ejs');
app.set('views','template')
// app.get('',(req,res)=>{
//     res.sendFile(`${folder}/index.html`);
// })
app.get("/home",(req,res)=>{
    const obj={
        name:"pushkar",
        class:"btech",
        arr:['pushkar',1,2,3,4,"rishab"],
    }
    res.render("home",{obj});
})
app.listen(4000);