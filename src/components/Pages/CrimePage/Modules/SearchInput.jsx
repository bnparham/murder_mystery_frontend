import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({setStreetSearch, streetSearch}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-search"
          label="جستجو بر اساس توضیحات / تاریخ"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setStreetSearch(e.target.value)}
          value={streetSearch}
        />
      </div>
    </Box>
  );
}