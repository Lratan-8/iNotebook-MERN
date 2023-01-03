import React, { useState,useEffect } from 'react';
import NoteContext from './noteContext'

const NoteState = (props) => {

  

  const host = 'http://localhost:5000'

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [authToken, setAuthToken] = useState();
  

  useEffect(()=>{

    
  if(localStorage.getItem('token')){
    setAuthToken(localStorage.getItem('token'));
  }else if(authToken){
    setAuthToken(authToken);
  }
  },[])

  //function to set if the user is logged in or note(that means if it has a jwt token or not)



  //function to fetch all notes from the server

  const getNotes = async (token) => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });
    const json = await response.json();
    setNotes(json);
  }



  //function to add a note
  const addNote = async (title, description, tags, jwt) => {

    //API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': jwt
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
        'auth-token': authToken
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
  const editNote = async (title, description, tags, id, token) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
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
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, authToken, setAuthToken}}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;