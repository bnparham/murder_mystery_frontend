import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LocationSearchInput({setLocationSearch, locationSearch}) {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display:'flex',
        justifyContent:'space-between'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-search"
          label="جستجو بر اساس نام مکان"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setLocationSearch(e.target.value)}
          value={locationSearch}
        />
      </div>
      
    </Box>
  );
}