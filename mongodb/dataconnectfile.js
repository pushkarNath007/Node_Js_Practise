const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client= new MongoClient(url);

async function connectdb(dbname,clname){
    let alldb= await client.connect();
    let reqdb=alldb.db(dbname);
    return reqdb.collection(clname);
}

module.exports=connectdb;