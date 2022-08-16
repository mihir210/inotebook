import React from 'react'

import noteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props)=>{
   
   const notein = [
      {
        "_id": "62fb72bfa2f3f5c21ad585b0",
        "user": "62fb728aa2f3f5c21ad585ab",
        "title": "my title update",
        "description": "please addb update",
        "tag": "personal",
        "date": "2022-08-16T10:34:39.992Z",
        "__v": 0
      },
      {
        "_id": "62fb9a7b21a9ba3e0fa24096",
        "user": "62fb728aa2f3f5c21ad585ab",
        "title": "my title",
        "description": "please add",
        "tag": "personal",
        "date": "2022-08-16T13:24:11.092Z",
        "__v": 0
      },
      {
         "_id": "62fb72bfa2f3f5c21ad585b01",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       {
         "_id": "62fb72bfa2f3f5c21ad585b02",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       {
         "_id": "62fb72bfa2f3f5c21ad585b3",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       {
         "_id": "62fb72bfa2f3f5c21ad585b34",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       {
         "_id": "62fb72bfa2f3f5c21ad585b03",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       {
         "_id": "62fb72bfa2f3f5c21ad585b05",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       {
         "_id": "62fb72bfa2f3f5c21ad585b06",
         "user": "62fb728aa2f3f5c21ad585ab",
         "title": "my title update",
         "description": "please addb update",
         "tag": "personal",
         "date": "2022-08-16T10:34:39.992Z",
         "__v": 0
       },
       
    ]
    
    const [notes, setNotes] = useState(notein)
    
    
    //add a note
    
    const addNote = (title, description, tag)=>{
      const note  ={
        "_id": "62fb72bfa2kdffjn3f5c21ad585b06",
        "user": "62fb728aa2f3f5c21ad585ab",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-08-16T10:34:39.992Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }
 
    
    //delete note
    
    const deleteNote  = ()=>{
      
    }
    
    //edit note
    
    const editNote = ()=>{
      
    }

   return (
      <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;