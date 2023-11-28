import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({setStreetSearch, streetSearch, setCrimeSceneSearchDate, crimeSceneSearchDate, crimeSceneSearchDesc, setCrimeSceneSearchDesc}) {
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
          label="جستجو بر اساس خیابان"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setStreetSearch(e.target.value)}
          value={streetSearch}
        />
        <TextField
          id="standard-search"
          type="date"
          variant="outlined"
          color="secondary"
          onChange={(e) => setCrimeSceneSearchDate(e.target.value)}
          value={crimeSceneSearchDate}
        />
        <TextField
          id="standard-search"
          label="جستجو بر اساس توضیحات"
          type="search"
          variant="standard"
          color="secondary"
          onChange={(e) => setCrimeSceneSearchDesc(e.target.value)}
          value={crimeSceneSearchDesc}
        />
      </div>
    </Box>
  );
}