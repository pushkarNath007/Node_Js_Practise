const mongoose=require('mongoose');
 mongoose.connect('mongodb://localhost:27017/mongoosedb1');
 const sch=new mongoose.Schema({
    name:String,
    id:Number,
    age:Number
 });
 // datasave /insert

//  const datasave=async()=>{
//     const connectdb=mongoose.model('pr1',sch);
//     let data= new connectdb({
//         name:"rishabh",
//         id:6698,
//         age:12
//     })
//     let result=await data.save();
//     console.log(result);
//  }
//  datasave();

 // update on mongodb with mongoose

//  const update=async()=>{
//     const connectdb=mongoose.model('pr1',sch);
//     let data=await connectdb.updateMany({
//         name:"pushkar"
//     },{
//         $set:{
//             name:"push",
//             id:65908181
//         }
//     })
//     console.log(data);
//  }
//  update();

// to delete
const deletedb=async()=>{
    const connectdb=mongoose.model('pr1',sch);
    await connectdb.deleteMany({name:"push"});
}
deletedb();

// to find/get
const finding=async()=>{
    const connectdb=mongoose.model('pr1',sch);
    let data = await connectdb.find({name:"rishabh"});
    console.log(data);
}
finding();
