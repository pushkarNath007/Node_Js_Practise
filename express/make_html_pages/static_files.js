const express=require('express');
const path=require('path');
const app=express();
const folder=path.join(__dirname,"make_html_pages");
console.log(folder);
app.use(express.static(folder));
// app.get()

app.listen(4000);