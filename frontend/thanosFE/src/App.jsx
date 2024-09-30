import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const fetchNotes = async()=>{
// make req to db
const response = await axios.get("http://localhost:3000/notes")

const info = await response.data;
console.log(info)
await setNotes(info.notes)
console.log("Notes fetched from DB");
console.log("state available: NOTES[{}]");
  }

useEffect(()=>{
fetchNotes();
},[])


  return (
    <>
     
    </>
  )
}

export default App
