const path=require('path');
const fs=require('fs/promises');
const input=process.argv;
const folder=path.join(__dirname,"fs");
console.log(folder);
// fs.writeFile(`${folder}/${input[2]}`,input[3]);
fs.rename(`${folder}/${input[2]}`,`${folder}/${input[4]}`,(err)=>{
    if(!err) console.log("success");
})
