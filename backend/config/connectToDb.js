// connect to database and export to server
const mongoose = require('mongoose')

const connectToDb = async()=>{
await mongoose.connect();
console.log("Database connected")
}


module.exports=connectToDb
