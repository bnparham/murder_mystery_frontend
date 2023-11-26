import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FlightRadioButton from './FlightRadioButton';

export default function FlightSearchInput({setFlightSearch, flightSearch, setFlightRadio, setFlightSearchDate, flightSearchDate}) {

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
    <FlightRadioButton setFlightRadio={setFlightRadio}/>
      <div>
        <TextField
          id="standard-search"
          label="جستجو بر اساس مبدا"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setFlightSearch(e.target.value)}
          value={flightSearch}
        />
        <TextField
          id="standard-search"
          type="date"
          variant="outlined"
          color="secondary"
          onChange={(e) => setFlightSearchDate(e.target.value)}
          value={flightSearchDate}
        />
      </div>
      
    </Box>
  );
}