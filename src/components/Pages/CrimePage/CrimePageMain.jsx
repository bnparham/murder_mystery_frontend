import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CrimePageColContainer from './CrimePageColContainer';

import enigmaBG from '../../../img/enigmaBG.jpg'
import tableBG from '../../../img/tableBG.jpg'
import whiteBG from '../../../img/whiteBG.jpg'
import CrimePageSelectTabs from './CrimePageSelectTabs';
import CrimePageTables from './CrimePageTables';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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
    <>
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
          , backgroundSize:'cover' ,
          height:'92vh',
          }}>
          <CrimePageColContainer>
            <CrimePageTables value={value} />
          </CrimePageColContainer>
        </Item>
      </Grid>
      <Grid xs={2}>
        <Item>
          <CrimePageColContainer>
            <CrimePageSelectTabs value={value} handleChange={handleChange}/>
          </CrimePageColContainer>
        </Item>
      </Grid>
      </Grid>
      <div>
        <Link to='/' style={{textDecoration:'none', color:'#fff'}}>
        <Button size='medium' sx={{mt:'5px',width:'150px'}} variant="contained" startIcon={<ArrowBackIcon size='large'/>}>
          بازگشت
        </Button>
        </Link>
    </div>
    </>
  )
}


