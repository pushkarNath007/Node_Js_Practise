const mongoose=require('mongoose');
const mongodb=require('mongodb');
mongoose.connect("mongodb://localhost:27017/mongoosedb1");
const sch= new mongoose.Schema({
    name:String,
    id:Number,
    class:String,
    age :Number
});
//insert data save
// const datasave=async()=>{
//     let connectdb=mongoose.model('pr1',sch);
//    let data= new connectdb({
//         name:"pushkar nath",
//         id:6590,
//         class:"btech",
//         age:20
//     })
//     await data.save();
// };
// datasave();

// update 
// const update=async()=>{
//     const connect=mongoose.model('pr1',sch);
//     await connect.updateOne({name:"rishabh"},{$set:{name:"abhiraj",id:9970,age:21}});
// }
// update();


//delete

const deletedb=async()=>{
    const connect=mongoose.model('pr1',sch);
    await connect.deleteOne({_id:mongodb.ObjectId("62be2786ed775558fbb2f1fa")});
}
deletedb();
