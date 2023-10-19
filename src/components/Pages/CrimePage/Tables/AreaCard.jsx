import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AlertDialog from './AlertDialog';

export default function AreaCard({clue}) {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickopenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleClose = () => {
      setOpenDialog(false);
    };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClickopenDialog} >
        <CardMedia
          component="img"
          height="140"
          image={`${clue.item_id.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {clue.item_id.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {clue.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <AlertDialog clue={clue} openDialog={openDialog} handleClose={handleClose} />
    </Card>
  );
}