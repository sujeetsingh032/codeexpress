const express = require('express');
require('dotenv').config();
const myapp = express();
const myport = process.env.PORT || 6900;


const app = myapp.get("/",(req,res)=>{
    res.send("welcome to Express file");
});

app.listen(myport,()=>{
    console.log(`Server is running at http://localhost:${myport}`)
})

