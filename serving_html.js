const http=require("http")
const fs=require("fs")
const filetext=fs.readFileSync("serving_htmlfile.html")
// console.log(filetext);
// creating server
const ser=http.createServer((req,res)=>{
    // here you will serve
    // console.log()
    res=req.url;
    res.writeHead(200,{'content-type':'text/html'})
    // now to serve
    res.end(filetext);
})
//now after making server
ser.listen(80,'127.0.0.1',()=>{
    console.log(`this is for checking`);
})
