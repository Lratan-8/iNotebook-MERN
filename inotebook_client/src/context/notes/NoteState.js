import React, {useState} from 'react';
import NoteContext from './noteContext'

const NoteState = (props) =>{

    const notesInitial = [
        {
          "_id": "63a9972adr2a161d981315e68",
          "user": "63a996dfd2a161d981315e63",
          "title": "lalit note 2",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-26T12:44:26.252Z",
          "__v": 0
        },
        {
          "_id": "63aa90ed2rdfd53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        },
        {
          "_id": "63aa90edf2dfd53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        },
        {
          "_id": "63aa9fd0edw2d53d5cc5aec67a5",
          "user": "63a996dfd2a161d981315e63",
          "title": "test note",
          "tags": "second tag",
          "description": "you are almost there",
          "date": "2022-12-27T06:30:05.577Z",
          "__v": 0
        },
        {
          "_id": "63aa90edfd2d5q3d5cc5aec67a5",
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
      const addNote = (title,description,tags) =>{
        
        //toDo api Call
        setNotes([...notes,{title,description,tags}]);
       
      } ;

      //function to delete a note
      const deleteNote = (_id) =>{

        //toDo api call
        const newNotes = notes.filter((note)=>{return note._id!== _id});
        setNotes(newNotes);

      }

      //function to edit a note
      const editNote = () =>{

      }


    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;