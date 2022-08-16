import React from 'react'
import { useContext } from 'react'
import  noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
   const context = useContext(noteContext);
   const {notes} = context;
  return (
    <>
    <AddNote/>
   <div className='row my-4'>
   <h1>Your Notes</h1>
   {notes.map((note)=>{
     return <NoteItem key={note.id} note = {note}/>
   })}
 </div>
 </>
  )
}

export default Notes