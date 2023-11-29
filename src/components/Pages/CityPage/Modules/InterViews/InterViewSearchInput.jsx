import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InterViewSearchInput({setInterViewSearchDate, interviewSearchDate, interViewNameSearch, setInterViewNameSearch}) {

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

      <TextField
          id="standard-search"
          label="جستجو بر اساس نام خیابان"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setInterViewNameSearch(e.target.value)}
          value={interViewNameSearch}
        />

      </div>
      
    </Box>
  );
}