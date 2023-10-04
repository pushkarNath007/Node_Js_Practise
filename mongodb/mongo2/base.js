const {MongoClient}=require("mongodb");
// const express=require("express");
const url="mongodb://localhost:27017";
const client=new MongoClient(url);

let connectdb= async(dbname,clname)=>{
    let alldb= await client.connect();
    let db=alldb.db(dbname);
    return db.collection(clname);
}
// connectdb();
module.exports= connectdb;
