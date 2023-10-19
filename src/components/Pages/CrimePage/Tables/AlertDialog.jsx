import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({openDialog, handleClose, clue}) {

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{textAlign:'center'}} id="alert-dialog-title">
          {clue.item_id.name}
        </DialogTitle>
        <DialogContent>
          <img src={`${clue.item_id.image}`} height={350} width={350} alt={`${clue.item_id.name}`}/>
          <DialogContentText sx={{textAlign:'center'}} id="alert-dialog-description">
            {clue.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            متوجه شدم
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}