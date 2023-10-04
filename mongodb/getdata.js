const collection=require('./dataconnectfile');

const getdata= async ()=>{
    let alldata=  await collection("express_js","product");
    let data=await alldata.find().toArray();
    console.warn(data);
}
getdata();


