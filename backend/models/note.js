const mongoose = require('mongoose')

//this is where schema and properties are created
const noteSchema = new mongoose.Schema({
    title:  String, // you can add required etc fields here
    body:String
})


const Note = mongoose.model("Note",noteSchema)
module.exports = Note