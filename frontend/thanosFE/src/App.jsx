import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Index from './components/Index';
// import { updateSearchIndex } from '../../../backend/models/note';


function App() {
  const [notes, setNotes] = useState(null)

const [createForm,setCreateForm] = useState({
  title:"",
  body:""
})


const [updateForm, setUpdateForm] = useState({
 _id:null,
  title:"",
  body:" "
})

  const fetchNotes = async()=>{
// make req to db
const response = await axios.get("http://localhost:3000/notes")

const info = await response.data;
console.log(info)
await setNotes(info.notes)
console.log("Notes fetched from DB");
console.log("state available: NOTES[{}]");
  }


  //since this below takes an input,we have to add preventDefault();
  const createNote = async(e) => {
e.preventDefault();
const res = await axios.post('http://localhost:3000/notes',createForm)
setNotes(()=>[res.data.note,...notes])  //addin a new note to  note along with old notes
// once state is updated ,we  no longer 
setCreateForm(()=>({
 title:"",
  body:""
}))
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    // take vals off inout
    console.log({ name, value });

    setCreateForm(() => ({
      ...createForm,
      [name]: value,
    }));
  };


useEffect(()=>{
fetchNotes();
},[])


  return (
    <>

    <div className="formMajor">
{/* NEW form */}
<form onSubmit={createNote} >
<input type="text"
 className="newFM"
 name="title"
 value={createForm.title}
 placeholder='Enter Title'
 onChange={updateCreateFormField} 
/>

<input type="text"
 className="newFM"
 name="body"
 value={createForm.body}
 placeholder='Enter Body'
 onChange={updateCreateFormField}
/>
 <button type='submit'> Note(+) </button>
</form>


{/* Edit form */}
<hr />
<p>Edit Form</p>
<hr />

{/* Update form */}
<hr />
<p>Update  Form</p>
<hr />




    </div>
   
     {notes ? ( <Index info={notes} />) : <p>No Notes Available</p> }

    </>
  )
}

export default App
