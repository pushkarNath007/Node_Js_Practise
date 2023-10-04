const http =require('http');
http.createServer((req,res)=>{
    res.writeHead(200,"content-type"-"application/json");
    const obj={
        name:"pushkar nath vhaturvedi",
        id:21
    }
    res.write("hello");
    
    res.end(JSON.stringify(obj));
}).listen(8000);