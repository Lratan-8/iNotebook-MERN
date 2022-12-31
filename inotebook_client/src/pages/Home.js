import * as React from 'react';
import Box from '@mui/material/Box';
import AddNote from '../components/Addnote';
import MyNotes from '../components/MyNotes';

export default function BasicStack() {

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}  >
      <h2>Add Note</h2>
      <AddNote/>
      <MyNotes/>
    </Box>
  );
}