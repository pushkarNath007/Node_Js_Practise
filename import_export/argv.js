const fs=require('fs')
const path=require("path")
const input=process.argv;
const folder=path.join(__dirname,"import_export");
// console.log(input);
fs.writeFileSync(input[2],input[3]);
