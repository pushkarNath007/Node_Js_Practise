const connectdb=require('./base')

const getdata=async(dbname,clname)=>{
    let data= await connectdb(dbname,clname);
    // console.log(data);
   let result=await data.insertMany([{name:"pushkar nath",price: 300,
    age: 20 },{name:"abhiraj", price:450, age:67}])
    console.log(result);
}
getdata("express_js","product1");