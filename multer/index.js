const multer=require('multer');
const express=require('express');
const path=require('path');
const app=express();
const folder=path.join(__dirname);
console.log(folder);
const upload=multer({
    storage:multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,`${folder}`);
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single("user_file");
app.post("", upload, async(req,res)=>{
    res.send("file successful");
}).listen(2000);