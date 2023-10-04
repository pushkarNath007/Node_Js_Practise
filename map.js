const fs=require("fs")
const express=require("express")

let obj=[
  {name:"pushkar",age:20},
  {name:"rishab",age:20}
]
console.log(obj[0].name);
let arr=obj.map((user,idx)=>{
    //return user.name;
    return{
        firstname:user.name,
        index:idx,
    }
});
// const arr=obj.map;
console.log(arr);
console.warn(100+23);
console.log("lets check")
console.log("its working");