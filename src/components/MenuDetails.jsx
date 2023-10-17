import React from 'react';
import { Button, Card, CardActions, CardContent, Typography, Box } from '@mui/material';

const MenuDetails = ({children, isHover, bgColor}) => {
  return (
    <Card style={{
      backgroundColor: isHover ? bgColor : '#0007',
      width:'100%',
      padding: isHover ? '10% 0' : '15px 0',
      transition: '0.3s linear',
    }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default MenuDetails;
