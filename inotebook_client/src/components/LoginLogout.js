import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function LoginLogout() {
  return (
    <Card >
      <CardActions>
        <Link to='/login'>
        <Button size="large" variant='contained'>Login</Button>
        </Link>
      </CardActions>
      <CardActions>
        <Link to='/signup'>
        <Button size="large" variant='outlined'>Create Account</Button>
        </Link>
        </CardActions>
        <NoteAltIcon />
    </Card>
  );
}