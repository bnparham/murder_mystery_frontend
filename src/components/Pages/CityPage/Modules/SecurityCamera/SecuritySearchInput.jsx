import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SecurityRadioButton from './SecurityRadioButton';

export default function SecuritySearchInput({setSecuritySearch, securitySearch, setSecurityRadio}) {

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
    <SecurityRadioButton setSecurityRadio={setSecurityRadio}/>
      <div>
        <TextField
          id="standard-search"
          label="جستجو بر اساس نام خیابان"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setSecuritySearch(e.target.value)}
          value={securitySearch}
        />
      </div>
      
    </Box>
  );
}