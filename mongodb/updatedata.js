const connectdb=require('./dataconnectfile');
const updateONE=async(dbname,clname,newname)=>{
    let data= await connectdb(dbname,clname);
    data.updateOne({name:"abhiraj singh dumbledor"},{$set:{name:newname}});
}

updateONE("express_js","product","abhiraj singh");
const updatemany=async(dbname,clname,oldname,newname)=>{
    let data=await connectdb(dbname,clname);
    data.updateMany({name:oldname},{$set:{name:newname}});
}
updatemany("express_js","product","aashish","vashishst");
