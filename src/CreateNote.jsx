import { Button } from '@material-ui/core';
import React from 'react';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import { useState } from 'react';


const CreateNote=(props)=>{

    const [note,setnote]=useState({
        title:"",
        content:"",
    });

const InputEvent=(event)=>{
    // obj destructuring
const {name,value}=event.target;
    setnote((prevdata)=>{
        return{
            ...prevdata,
            [name]:value,

        }
    })
}
const Add=()=>{
props.passNote(note);
setnote({
    title:"",
    content:"",
})
}
    return(
<>
<div className="main__note">
    <form>
        <input
         type='text' 
         name="title"
         value={note.title}
         onChange={InputEvent} 
         placeholder="Title" 
         autoComplete="off"
         />
        <textarea 
        rows="" 
         cols=""
         name="content"
         value={note.content}
         onChange={InputEvent}
          placeholder="Write a Note.."
           />
    <Button onClick={Add}>
<LibraryAddCheckIcon/>
    </Button>
    

    </form>
</div>
</>
    );
}
export default CreateNote;