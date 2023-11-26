import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AirportSearchInput({setAirportSearch, airportSearch}) {

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
          label="جستجو شهر"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setAirportSearch(e.target.value)}
          value={airportSearch}
        />
      </div>
      
    </Box>
  );
}