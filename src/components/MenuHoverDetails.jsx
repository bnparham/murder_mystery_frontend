import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import  Box  from '@mui/material/Box';


export default function MenuHoverDetails() {
  return (
    <Box>
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
        </Alert>
    </Box>
  )
}
