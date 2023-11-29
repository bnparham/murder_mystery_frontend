import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PersonSearchInput({setPersonPhoneNumberSearch, personPhoneNumberSearch, setPersonPassportSearch, personPassportSearch, setPersonLicenseSearch, personLicenseSearch, personNameSearch, setPersonNameSearch}) {

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
          label="جستجو بر اساس شماره تلفن"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPersonPhoneNumberSearch(e.target.value)}
          value={personPhoneNumberSearch}
        />
        <TextField
          id="standard-search"
          label="جستجو بر اساس شماره پلاک"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPersonLicenseSearch(e.target.value)}
          value={personLicenseSearch}
        />
        <TextField
          id="standard-search"
          label="جستجو بر اساس پاسپورت"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPersonPassportSearch(e.target.value)}
          value={personPassportSearch}
        />
          <TextField
          id="standard-search"
          label="جستجو بر اساس نام شخص"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setPersonNameSearch(e.target.value)}
          value={personNameSearch}
        />
      </div>
      
    </Box>
  );
}