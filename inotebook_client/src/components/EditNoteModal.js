import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Card, TextField } from '@mui/material';
import noteContext from '../context/notes/noteContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditNoteModal(props) {

  const context = useContext(noteContext);
  const{editNote} = context;
  

  const { open, handleEditModal, noteDetails } = props.value;
  const handleSubmit = async (event) => {
    let title,tags,description
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('title').length !==0){
      title = data.get('title')
    }else{
      title = noteDetails.title;
    }

    if( data.get('tags').length !==0){
      tags =  data.get('tags')
    }else{
      tags = noteDetails.tags
    }

    if( data.get('description').length !==0){
      description = data.get('description')
    }else{
      description = noteDetails.description
    }
    let id = noteDetails._id
    await editNote(title, description, tags, id);
    
    handleEditModal();
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button variant='outlined' onClick={handleEditModal}>
            <CloseIcon />
          </Button>
          <h3>Edit note</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              name='title'
              placeholder={noteDetails.title}
              type={'text'}
              fullWidth
              sx={{ marginBottom: 1.5 }}
            />
            <TextField
              name='tags'
              type={'text'}
              fullWidth
              placeholder={noteDetails.tags}
              sx={{ marginBottom: 1.5 }}
            />
            <TextField
              name='description'
              type={'text'}
              fullWidth
              placeholder={noteDetails.description}
              multiline rows={4}
              sx={{ marginBottom: 1.5 }}
            />
            <Button type='submit' variant='contained' ><b>Confirm changes</b></Button>

          </form>
        </Box>
      </Modal>
    </div>
  );
}