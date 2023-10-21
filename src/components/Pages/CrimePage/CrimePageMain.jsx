import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SelectTabs from './SelectTabs';
import CrimePageColContainer from './CrimePageColContainer';
import CrimaPageTables from './CrimaPageTables';

import enigmaBG from '../../../img/enigmaBG.jpg'
import tableBG from '../../../img/tableBG.jpg'
import whiteBG from '../../../img/whiteBG.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function CrimePageMain() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={10}>
        <Item sx={{
          backgroundImage:
           value === 0 ? `url(${whiteBG})`
           :
           value === 1 ? `url(${tableBG})`
           :
           value === 2 ? `url(${enigmaBG})`
           :
           ''
          , backgroundSize:'cover' 
          }}>
          <CrimePageColContainer>
            <CrimaPageTables value={value} />
          </CrimePageColContainer>
        </Item>
      </Grid>
      <Grid xs={2}>
        <Item>
          <CrimePageColContainer>
            <SelectTabs value={value} handleChange={handleChange}/>
          </CrimePageColContainer>
        </Item>
      </Grid>
    </Grid>
  )
}


