const fs=require('fs/promises')
let a=10;
let b=1;
 setTimeout( ()=>{
    a+=b;
    console.log(a);
},1000)
console.log(a);
//here late in updation