import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PassengersSearchInput({passengerFlightNumberSearch, setPassengerFlightNumberSearch}) {

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
          label="جستجو بر اساس شماره پرواز"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPassengerFlightNumberSearch(e.target.value)}
          value={passengerFlightNumberSearch}
        />
      </div>
      
    </Box>
  );
}