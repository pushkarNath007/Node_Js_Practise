const express=require('express');
const multer =require('multer');
const app=express();
const func=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"./multerfolder");
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single("user_data");

app.post("/hm", func,(req,res)=>{
    const data=23;
    res.send(data.toString());
}).listen(80);