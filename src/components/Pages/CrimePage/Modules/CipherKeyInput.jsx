import { Box } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: '1',
      label: '1 کلید',
    },
    {
      value: '2',
      label: '2 کلید',
    },
    {
      value: '3',
      label: '3 کلید',
    },
    {
      value: '4',
      label: '4 کلید',
    },
    {
    value: '5',
    label: '5 کلید',
      },
      {
        value: '6',
        label: '6 کلید',
      },
      {
        value: '7',
        label: '7 کلید',
      },
      {
        value: '8',
        label: '8 کلید',
      },
      {
        value: '9',
        label: '9 کلید',
      },
      {
        value: '10',
        label: '10 کلید',
      },
      {
        value: '11',
        label: '11 کلید',
      },
      {
        value: '12',
        label: '12 کلید',
      },
      {
        value: '13',
        label: '13 کلید',
      },
      {
        value: '14',
        label: '14 کلید',
      },
      {
        value: '15',
        label: '15 کلید',
      },
      {
        value: '16',
        label: '16 کلید',
      },
      {
        value: '17',
        label: '17 کلید',
      },
      {
        value: '18',
        label: '18 کلید',
      },

      {
        value: '19',
        label: '19 کلید',
      },

      {
        value: '20',
        label: '20 کلید',
      },
      {
        value: '21',
        label: '21 کلید',
      },
      {
        value: '22',
        label: '22 کلید',
      },
      {
        value: '23',
        label: '23 کلید',
      },
      {
        value: '24',
        label: '24 کلید',
      },
      {
        value: '25',
        label: '25 کلید',
      },
  ];

export default function CipherKeyInput({setKeyValue}) {
  return (
    <Box 
    sx={{padding:5}}
    >
        <TextField
          id="standard-select-currency"
          select
          defaultValue="one"
          helperText="لطفا کلید دلخواه را انتخاب کنید"
          variant="standard"
          onChange={(e)=> setKeyValue(e.target.value) }
          sx = {{backgroundColor:'#fff', borderRadius:'10px 100px / 120px 100px', p:1}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

    </Box>
  )
}
