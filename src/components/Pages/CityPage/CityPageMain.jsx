import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


import enigmaBG from '../../../img/enigmaBG.jpg'
import tableBG from '../../../img/tableBG.jpg'
import whiteBG from '../../../img/whiteBG.jpg'
import CrimePageColContainer from './../CrimePage/CrimePageColContainer';

import CityPageTables from './CityPageTables';
import CityPageSelectTabs from './CityPageSelectTabs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function CityPageMain() {

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
           value === 1 ? `url(${whiteBG})`
           :
           value === 2 ? `url(${whiteBG})`
           :
           ''
          , backgroundSize:'cover' 
          }}>
          <CrimePageColContainer>
            <CityPageTables value={value} />
          </CrimePageColContainer>
        </Item>
      </Grid>
      <Grid xs={2}>
        <Item>
          <CrimePageColContainer>
            <CityPageSelectTabs value={value} handleChange={handleChange}/>
          </CrimePageColContainer>
        </Item>
      </Grid>
    </Grid>
  )
}


