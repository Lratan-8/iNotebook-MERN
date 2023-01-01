import React,{useContext} from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import noteContext from '../context/notes/noteContext';


export default function AddNote() {

  const context = useContext(noteContext)
  const {addNote} = context;
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        addNote(data.get('title'), data.get('tags'), data.get('description'));
    }
  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
    <Card component='form' onSubmit={handleSubmit}  style={{width: '90%', boxSizing: 'borderbox', padding: '5%', paddingTop: '0%'}} >
        <h4>Add a new note</h4>
        <TextField 
        name='title'
        type={'text'} 
        fullWidth label="Title" 
        sx={{marginBottom: 1.5}}
       />
        <TextField 
        name='tags'
        type={'text'} 
        fullWidth 
        label="Tags"  sx={{marginBottom: 1.5}} 
        />
        <TextField 
        name='description'
        type={'text'} 
        fullWidth 
        label="Description" 
        multiline rows={4} 
        sx={{marginBottom: 1.5}}
        />
        <Button type='submit' variant='contained'><b>Add Note</b></Button>
    </Card>
    </div>
  );
}