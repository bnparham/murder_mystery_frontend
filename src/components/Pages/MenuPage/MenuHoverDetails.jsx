import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import  Box  from '@mui/material/Box';


export default function MenuHoverDetails({children, bgColor}) {
  return (
    <Box
        sx={{
            backgroundColor: bgColor,
            padding: '20px',
        }}>
        {children}
    </Box>
  )
}
