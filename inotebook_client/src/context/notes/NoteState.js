import React, { useState } from 'react';
import NoteContext from './noteContext'

const NoteState = (props) => {

  

  const host = 'http://localhost:5000'

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);


  //function to fetch all notes from the server

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMmZhOGFhMGRlM2U4ZWFmMjIyZjQyIn0sImlhdCI6MTY3MjY3MzkzNn0.F8uWZoJr0IHnlzTsrUroGehWTftzvZVdR5_X5KNf5QA'
      }
    });
    const json = await response.json();
    setNotes(json);
  }



  //function to add a note
  const addNote = async (title, description, tags) => {

    //API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMmZhOGFhMGRlM2U4ZWFmMjIyZjQyIn0sImlhdCI6MTY3MjY3MzkzNn0.F8uWZoJr0IHnlzTsrUroGehWTftzvZVdR5_X5KNf5QA'
      },
      body: JSON.stringify({ title, description, tags })
    });
    const json = await response.json();
    //Client side update
    setNotes([...notes,  json ]);
  
  };

  //function to delete a note
  const deleteNote = async (_id) => {

    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMmZhOGFhMGRlM2U4ZWFmMjIyZjQyIn0sImlhdCI6MTY3MjY3MzkzNn0.F8uWZoJr0IHnlzTsrUroGehWTftzvZVdR5_X5KNf5QA'
      }
    });
    const json = await response.json();
    console.log(json);
    //rendering in the client side
    const newNotes = notes.filter((note) => { return note._id !== _id });
    console.log(newNotes)
    setNotes(newNotes);

  }

  //function to edit a note
  const editNote = async (title, description, tags, id) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMmZhOGFhMGRlM2U4ZWFmMjIyZjQyIn0sImlhdCI6MTY3MjY3MzkzNn0.F8uWZoJr0IHnlzTsrUroGehWTftzvZVdR5_X5KNf5QA'
      },
      body: JSON.stringify({ title, description, tags })
    });
    const json = await response.json()
    //login to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tags = tags
      }
    }
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;