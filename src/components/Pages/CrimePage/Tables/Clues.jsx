import React, { useEffect, useState } from 'react'
import AreaCard from './AreaCard'
import AlertDialog from './AlertDialog';
import { Grid } from '@mui/material';

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
        : <div>مدرکی برای این جرم ثبت نشده است</div>
        :
        <div>لطفا یک جرم را انتخاب کنید</div>
        }
    </div>
  )
}
