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
      }
    ]
    
    const [notes, setNotes] = useState(notein)
   

   return (
      <noteContext.Provider value={{notes, setNotes}}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;