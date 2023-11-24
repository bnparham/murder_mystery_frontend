import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PhoneCallSearchInput({setPhoneCallSearch, phoneCallSearch, setPhoneCallSearchDate, phoneCallSearchDate, setPhoneCallSearchCaller, phoneCallSearchCaller}) {

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
          label="جستجو شماره تماس گیرنده"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPhoneCallSearchCaller(e.target.value)}
          value={phoneCallSearchCaller}
        />
        <TextField
          id="standard-search"
          label="جستجو بر اساس مدت مکالمه"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPhoneCallSearch(e.target.value)}
          value={phoneCallSearch}
        />
        <TextField
          id="standard-search"
          type="date"
          variant="outlined"
          color="secondary"
          onChange={(e) => setPhoneCallSearchDate(e.target.value)}
          value={phoneCallSearchDate}
        />
      </div>
      
    </Box>
  );
}