const http=require('http')
const { type } = require('os')
const hostname='127.0.0.1'
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify({name:'pushkar nath chaturvedi',age:"20"}))
    res.end();
}).listen(80,()=>{
    console.log(`http://${hostname}`);
});