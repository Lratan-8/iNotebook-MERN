import * as React from 'react';
import Box from '@mui/material/Box';
import AddNote from '../components/Addnote';
import MyNotes from '../components/MyNotes';

export default function BasicStack() {

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}  >
      <h2>Add Note</h2>
      <AddNote/>
      <h2>All Notes</h2>
      <MyNotes/>
      
    </Box>
  );
}