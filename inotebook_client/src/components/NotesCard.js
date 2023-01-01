import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function NotesCard(props) {

  const {title, tags, description} = props.value

  return (
    <Card sm={12} sx={{ minWidth: '30%', marginRight: '10px', marginBottom: '10px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {tags}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <DeleteIcon/>
        </Button>
        <Button size="small" color="primary">
          <EditIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}