// here creating 6 files inside
// import_export folder inside  dir folder
const fs=require('fs')
// const path = require('path')
const path=require('path')
// const filepath=path.join(__dirname,"import_export","dir")
//  console.log(filepath);
//  for(let i=0;i<5;++i){
//     fs.writeFileSync(`${filepath}/note${i}.txt`,`this is chechking no ${i}`);
//  }
const folder=path.join(__dirname,"import_export","dir");
console.log(folder);
//creating the file ->

console.log(folder);
for(i=5;i<10;++i){
   fs.writeFileSync(`${folder}/note${i}.txt`,`hellow rishab ${i}`);
}

// reading the folder -->
//  read dir sych becomes an array and item will access all its index
// fs.readdir(folder,(err,item)=>{
//   console.log(item);
//   item.forEach((i)=>{
//    console.log(i);
//   })
// })

// reding the file
// fs.readFile(`${folder}/note0.txt`,"utf8",(err,item)=>{
//    console.log(item);
// })

// let filedat=fs.readFileSync(`${folder}/note0.txt`,"utf8");
// console.log(filedat);

// deleting the file
// for(i=2;i<10;++i){
//    fs.unlinkSync(`${folder}/note${i}.txt`);
// }

// appending in the file
// for(i=5;i<10;++i){
// fs.appendFile(`${folder}/note5.txt`,`append+${i}`,(err)=>{
//    if(!err) console.log("successful");
// })
// }
for(i=6;i<10;++i){
fs.rename(`${folder}/note${i}.txt`,`${folder}/rename${i}.txt`,(err)=>{
   if(!err) console.log("successful");
})
}


