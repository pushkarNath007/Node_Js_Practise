const connectdb=require('./base')

const getdata=async(dbname,clname)=>{
    let data= await connectdb(dbname,clname);
    // console.log(data);
    let check=await data.find().toArray();
    console.log(check);
}
getdata("express_js","product1");