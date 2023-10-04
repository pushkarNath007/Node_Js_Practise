const fs=require('fs');
const path=require('path');
const input=process.argv;
const filepath=path.join(__dirname,"filers.txt");
const func=()=>{
    fs.readFile(filepath,'utf-8',(err,i)=>{
        console.log(i);
    })

   
    fs.writeFileSync(filepath,input[2]);
    fs.appendFile(filepath,input[3],(err)=>{
        if(!err) console.log("success");
    });
    const data=fs.readFileSync(filepath,"utf-8",);
    console.log(data);
    fs.unlink(filepath,(err)=>{
        if(!err) console.log("yup dleetd");
    })
}
func();