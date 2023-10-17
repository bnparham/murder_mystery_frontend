import React from 'react';
import { Button, Card, CardActions, CardContent, Typography, Box } from '@mui/material';

const MenuDetails = ({children}) => {
  return (
    <Card style={{
      backgroundColor:'#0007',
      width:'100%',
    }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default MenuDetails;
