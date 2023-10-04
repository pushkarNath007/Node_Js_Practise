const { Console } = require("console");
const fs=require("fs/promises")
// creating a file
const func= async()=>{
    try {
        await fs.writeFile("./reading.txt","this is just for chechking rishab have u got this");
        console.log("success");
    } catch (error) {
        console.log("error");
    }
}
// rename a file
func();
const rename=async()=>{
    try {
        await fs.rename("reading.txt","changing.txt");
        console.log("name change success");
    } catch (error) {
        // Console
        console.log("error 404");
    }
}
rename();