const express = require('express')
require('dotenv').config();
const app=express();
const cors = require('cors');
const PORT = process.env.PORT || 3000
const connectToDb=require('./config/connectToDb')
connectToDb();
app.use(express.json());

app.use(cors({
    origin:true,
    credentials:true
}))


const notesController = require('./controllers/notesController')

//Added all routes here (can refactor to Router folder)

//get all
app.get('/notes',notesController.fetchNotes)

//get one based on id
app.get('/notes/:id',notesController.fetchANote)

//add a note
app.post('/notes',notesController.createNote)

//edit a note
app.put('/notes/:id',notesController.updateNote)

//delete a note
app.delete('/notes/:id',notesController.deleteNote)



app.listen(PORT,()=>{
    console.log(`Server Connected : ${PORT}`);
    
})