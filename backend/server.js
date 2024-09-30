const express = require('express')
require('dotenv').config();
const app=express();
const PORT = process.env.PORT || 3000
const connectToDb=require('./config/connectToDb')
connectToDb();



app.listen(PORT,()=>{
    console.log(`Server Connected : ${PORT}`);
    
})