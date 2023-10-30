import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import bg2 from '../../../img/bg2.jpg'

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export default function CityPageSelectTabs({value, handleChange}) {

  return (
    <Box
      sx={{ flexGrow: 1,display: 'flex', height: '100%', backgroundImage:`url(${bg2})`, backgroundSize:'cover'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        textColor='secondary'
        sx={{ 
          borderRight: 1, borderColor: 'divider', width:"100%",
          "& button:focus": { color: "#f30505" },
          "& button:active": { color: "#f30505" },
          
          }}
        TabIndicatorProps={{style: {backgroundColor: '#f30505'}}}
      >
        <Tab sx={{color:'#fff'}} label="دوربین های امنیتی" {...a11yProps(0)} />
        <Tab sx={{color:'#fff'}} label="تلفن های همراه" {...a11yProps(1)} />
        <Tab sx={{color:'#fff'}} label="مصاحبه ها" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
    </Box>
  );
}