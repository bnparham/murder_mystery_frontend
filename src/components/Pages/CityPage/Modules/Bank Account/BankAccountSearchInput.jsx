import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BankAccountSearchInput({setBankAccountSearch, bankAccountSearch, setBankAccountSearchDate, bankAccountSearchDate, setBankAccountNumberSearch, bankAccountNumberSearch}) {

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
          label="جستجو بر اساس نام"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setBankAccountSearch(e.target.value)}
          value={bankAccountSearch}
        />
        <TextField
          id="standard-search"
          label="جستجو بر اساس شماره حساب"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setBankAccountNumberSearch(e.target.value)}
          value={bankAccountNumberSearch}
        />
        <TextField
          id="standard-search"
          type="date"
          variant="outlined"
          color="secondary"
          onChange={(e) => setBankAccountSearchDate(e.target.value)}
          value={bankAccountSearchDate}
        />
      </div>
      
    </Box>
  );
}