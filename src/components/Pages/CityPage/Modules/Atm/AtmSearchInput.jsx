import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AtmRadioButton from './AtmRadioButton';

export default function AtmSearchInput({setAtmStreetSearch, atmStreetSearch, setAtmSearchDate, atmSearchDate, setAtmRadio}) {

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
    <AtmRadioButton setAtmRadio = {setAtmRadio} />
      <div>
      <TextField
          id="standard-search"
          label="جستجو بر اساس خیابان"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setAtmStreetSearch(e.target.value)}
          value={atmStreetSearch}
        />
        <TextField
          id="standard-search"
          type="date"
          variant="outlined"
          color="secondary"
          onChange={(e) => setAtmSearchDate(e.target.value)}
          value={atmSearchDate}
        />
      </div>
      
    </Box>
  );
}