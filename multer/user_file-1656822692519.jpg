const mongoose=require('mongoose');

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/mongoosedb1");
    const sch=new mongoose.Schema({
        name:String,
        id:Number
    });
    const connect=mongoose.model("pr1",sch);
    let data1=new connect({name:"pushkar",id:6590});
    let result=await data1.save();
    console.log(result);
}
main();
