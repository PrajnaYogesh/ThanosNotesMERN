//put functionalities here based on HTTP methods and REST routing

const { json } = require("express")
const Note = require("../models/note")


//CRUD : find(), findByID() , findByIdAndUpdate() , findByIdAndDelete()

//read data or get data
const fetchNotes = async(req,res)=>{
    // await console.log("fetch all")
const notes = await Note.find()
res.json({notes:notes})
}

//read one note
const fetchANote = async(req,res)=>{
    const noteId = req.params.id;
const note = await Note.findById(noteId)
res.json({note:note});
}

//create 
const createNote = async(req,res)=>{
        const {title,body} = req.body;
    const note = await Note.create({
        title:title,
        body:body
    })
    res.json({note:note})

}

// //update
// const updateNote = async(req,res)=>{
//     // const noteId = req.params.id;
//     // const {title,body} = req.body;
//     // await Note.findByIdAndUpdate(noteId,{
//     //     title:title,
//     //     body:body
//     // })
//     // const updatedNote = Note.findById(noteId);
//     // res.json({note:updatedNote})

// }

const updateNote = async (req, res) => {
    const noteId = req.params.id;
    const { title, body } = req.body;
    const note = await Note.findByIdAndUpdate(noteId, {
      title: title,
      body: body,
    });
  
    const updatedNote = Note.findById(noteId);
  
    res.json({ note: updateNote });
  };


// delete
const deleteNote = async(req,res)=>{
    const noteId = req.params.id;
    await Note.findByIdAndDelete({
        _id:noteId
    })
    res.json({success: "record deleted"})

}


module.exports = {fetchNotes,fetchANote,createNote,updateNote,deleteNote}