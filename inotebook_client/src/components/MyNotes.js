import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import NotesCard from './NotesCard';

export default function MyNotes() {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;

    useEffect(() => {
        getNotes()
      }, [])
    
    return (
        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: '20px', paddingBottom: '50px', boxSizing: 'border-box', flexWrap: 'wrap'}}>
            {
            notes.map((note)=>{
            return <NotesCard key={note+Math.random()} value={note}/>
        })} 
        
        
        </div>
    )
}
