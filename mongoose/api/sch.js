const mongoose=require('mongoose');

const func=(dbname,clname)=>{
 mongoose.connect(`mongodb://localhost:27017/${dbname}`);
const sch= new mongoose.Schema({
    name:String,
    id:Number,
    salary:Number,
    section:String,
    age:Number,
    class:String
});
return mongoose.model(clname,sch);
}
module.exports=func;