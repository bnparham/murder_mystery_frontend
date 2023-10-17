import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import m1 from '../img/m1.jpg'
import m2 from '../img/m2.jpg'
import MenuSelect from './MenuSelect';

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
              backgroundImage={m1}
              onMouseEnter={(e) => handleBoxHover(e)}
              onMouseLeave={handleBoxLeave}
              id={'crimeReport'}
            >
              hello
              {hoveredBox?.id === 'crimeReport' ? 'jooooooon' : ''}
            </MenuSelect>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <MenuSelect 
              backgroundImage={m2}
              onMouseEnter={(e) => handleBoxHover(e)}
              onMouseLeave={handleBoxLeave}
              id={'enterCity'}
              >
                {hoveredBox?.id === 'enterCity' ? '12345' : ''}
            </MenuSelect>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

