// const promise=require('fs/promises')
let a=10;
let b=1;

let data=new Promise((succ,err)=>{
    setTimeout(()=>{
        succ(20);
    },1000)
})
data.then((b)=>{
    a+=b;
    console.log(a);
    console.log("hello");
})
// console.log(a);