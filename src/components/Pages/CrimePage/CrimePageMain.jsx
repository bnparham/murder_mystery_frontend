import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SelectTabs from './SelectTabs';
import CrimePageColContainer from './CrimePageColContainer';
import CrimaPageTables from './CrimaPageTables';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
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
        <Item>
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


