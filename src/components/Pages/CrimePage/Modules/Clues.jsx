import React, { useEffect, useState } from 'react'
import AreaCard from './AreaCard'
import AlertDialog from './AlertDialog';
import { Grid, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Clues({selected, setClues, clues}) {



  return (
    <div>
        {selected.length === 1
        ? clues.length !== 0 ? 
        <Grid container spacing={0}>
            {clues.map(
              c => 
              <Grid xs={12} md={4}>
                  <AreaCard key={c.id} clue={c}/>
              </Grid>
            )}
        </Grid>
        : 
        <Box sx={{backgroundColor:'#22c99480',borderRadius:'32px 32px 0 0', p:2}}>
                <Typography color={'#fff'} fontSize={20}>
                برای این جرم مدرکی ثبت نشده است 
                </Typography>
        </Box>
        :
        <Box sx={{backgroundColor:'#22c99480',borderRadius:'32px 32px 0 0', p:2}}>
                <Typography color={'#fff'} fontSize={20}>
                لطفا یک جرم را انتخاب کنید 
                </Typography>
        </Box>
        }
    </div>
  )
}
