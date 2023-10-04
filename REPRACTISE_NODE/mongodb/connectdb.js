const {MongoClient}=require('mongodb');
const express=require('express');
const app=express();
const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const func= async(dbname,clname)=>{
    const alldb= await client.connect();
    const db=alldb.db(dbname);
    return db.collection(clname);
}
module.exports=func;
