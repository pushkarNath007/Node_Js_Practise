const mongoose=require('mongoose');
const func=async(dbname,clname)=>{
    mongoose.connect(`mongodb://localhost:27017/${dbname}`);
    // const db=mongoose.connection;
    // db.on("open",()=>{
    //     console.log("successfully connected");
    // })
    // db.on("error",()=>{
    //     console.log("didnt connected to database");
    // })
    const sch=new mongoose.Schema({
        name:String,
        num:Number,
        class:String
    })
    return mongoose.model(clname,sch);
}
module.exports=func;
