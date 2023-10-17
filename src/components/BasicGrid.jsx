import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import MenuSelect from './MenuSelect';
import { Button, Card, CardActions, CardContent, Typography, Alert } from '@mui/material';
import MenuDetails from './MenuDetails';
import MenuHoverDetails from './MenuHoverDetails';

// images
import m1 from '../img/m1.jpg'
import m2 from '../img/m2.jpg'
import m1_blur from '../img/m1_blur.jpg'
import m2_blur from '../img/m2_blur.jpg'

// icobs
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Fingerprint from '@mui/icons-material/Fingerprint';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
  ...theme.typography.body2,
  padding: theme.spacing(0.4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

  const [hoveredBox, setHoveredBox] = React.useState(null);

  const handleBoxHover = (event, box) => {
    setHoveredBox(event.currentTarget);
  };

  const handleBoxLeave = () => {
    setHoveredBox(null);
    console.log(hoveredBox.id);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={6}>
          <Item>
            <MenuSelect 
              bg={m1}
              bgBlur={m1_blur}
              onMouseEnter={(e) => handleBoxHover(e)}
              onMouseLeave={handleBoxLeave}
              id={'crimeReport'}
              isHover={hoveredBox?.id === 'crimeReport' ? true : false}
            >
              {hoveredBox?.id === 'crimeReport' 
              ? <MenuHoverDetails bgColor="#0b56a284">
                  <Typography variant="subtitle1" color="#ffff">
                   گزارشی دقیق از آخرین جرائم به وقوع پیوسته در شهر به همراه مدارک ضمیمه پرونده
                  </Typography>
                  <Button size='medium' sx={{mt:'10px'}} variant="contained" startIcon={<LocalPoliceIcon size='large'/>}>
                      مشاهده
                  </Button>
              </MenuHoverDetails>
              : <MenuDetails>
                  <Typography variant="h6" color="#ffff">
                    آخرین جرائم ثبت شده در دیتابیس اداره پلیس
                  </Typography>
              </MenuDetails>
              }

            </MenuSelect>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <MenuSelect 
              bg={m2}
              bgBlur={m2_blur}
              onMouseEnter={(e) => handleBoxHover(e)}
              onMouseLeave={handleBoxLeave}
              id={'enterCity'}
              isHover={hoveredBox?.id === 'enterCity' ? true : false}
              >
                {
                  hoveredBox?.id === 'enterCity'
                  ?<MenuHoverDetails bgColor="#a28e0b84">
                    <Typography variant="subtitle1" color="#ffff">
                     آخرین گزارشات فرودگاه ها، اداره مخابرات، دوربین هایی امنیتی پلیس راهور و سایر مراکز   
                    </Typography>
                    <Button color='warning' size='medium' sx={{mt:'10px'}} variant="contained" startIcon={<Fingerprint size='large'/>}>
                      مشاهده
                  </Button>
                  </MenuHoverDetails> 
                  :<MenuDetails>
                    <Typography variant="h6" color="#ffff">
                      اطلاعات مراکز مهم  شهر در دیتابیس شهرداری
                    </Typography>
                  </MenuDetails>
                }
            </MenuSelect>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

