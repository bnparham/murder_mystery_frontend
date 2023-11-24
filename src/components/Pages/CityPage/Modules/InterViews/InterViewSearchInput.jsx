import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InterViewSearchInput({setInterViewSearchDate, interviewSearchDate}) {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display:'flex',
        justifyContent:'flex-end'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-search"
          type="date"
          variant="outlined"
          color="secondary"
          onChange={(e) => setInterViewSearchDate(e.target.value)}
          value={interviewSearchDate}
        />
      </div>
      
    </Box>
  );
}