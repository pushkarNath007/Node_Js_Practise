const connectdb=require("./dataconnectfile")

const deletemany=async(dbname,clname)=>{
    let data= await connectdb(dbname,clname);
    await data.deleteMany({name:"vashishst"}); 
}
deletemany("express_js","product");