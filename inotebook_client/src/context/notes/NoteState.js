import React, {useState} from 'react';
import NoteContext from './noteContext'

const NoteState = (props) =>{

    const notesInitial = [
        {
          "_id": "63a9972ad2a161d981315e68",
          "user": "63a996dfd2a161d981315e63",
          "title": "lalit note 2",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-26T12:44:26.252Z",
          "__v": 0
        },
        {
          "_id": "63aa90ed2dfd53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        },
        {
          "_id": "63aa90ed2dfd53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        },
        {
          "_id": "63aa9fd0ed2d53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        },
        {
          "_id": "63aa90edfd2d53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(notesInitial)

      //function to add a note
      const addNote = (title, description, tags) =>{
        //to api Call
        const note = null
        setNotes(notes.push(note))
      } ;
      //function to delete a note

      //function to edit a note


    return (
        <NoteContext.Provider value={notes}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;