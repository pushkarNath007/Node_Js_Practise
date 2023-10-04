const connectdb=require('./dataconnectfile');
const insertdata= async()=>{
    let collection=await connectdb("express_js","product");
    await collection.insertMany([{
        name:"aashish",
        age:19,
        class:"btech",
    },{
        name:"abhiraj",
        age:22,
        class:"btech",
    }]);
   
}
insertdata();