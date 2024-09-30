// connect to database and export to server
const mongoose = require('mongoose')
require('dotenv').config();

const connectToDb = async()=>{
await mongoose.connect(process.env.DB_URL);
console.log("Database connected")
}


module.exports=connectToDb
