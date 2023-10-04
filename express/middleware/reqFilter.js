module.exports=reqFilter=(req,res,next)=>{
    // console.log("filter");
    if(!req.query.age){
        res.send("<h1>page not found enter your age</h1>");
    }
    else{
        next();
    }
}