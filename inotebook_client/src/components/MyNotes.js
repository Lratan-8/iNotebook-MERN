import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NotesCard from './NotesCard';

export default function MyNotes() {
    const context = useContext(noteContext);
    const {notes} = context;
    
    return (
        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: '20px', paddingBottom: '50px', boxSizing: 'border-box', flexWrap: 'wrap'}}>
            {
            notes.map((note)=>{
            return <NotesCard value={note}/>
        })} 
        
        
        </div>
    )
}
