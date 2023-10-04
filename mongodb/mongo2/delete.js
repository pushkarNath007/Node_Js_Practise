const connectdb=require('./base')

const getdata=async(dbname,clname)=>{
    let data= await connectdb(dbname,clname);
    // console.log(data);
    data.deleteMany({name:"abhiraj"});
}
getdata("express_js","product1");