import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CrimeSence from './Tables/CrimeSence';
import SearchInput from './Tables/SearchInput';
import Clues from './Tables/Clues';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
export default function CrimaPageTables({value}) {
  const [streetSearch, setStreetSearch] = React.useState('')
  const [crimes, setCrimes] = React.useState([])
  const [selected, setSelected] = React.useState([]);
  const [clues, setClues] = React.useState([]);

  return (
    <>
      <TabPanel value={value} index={0}>
        <CrimeSence 
          crimes={crimes} 
          setCrimes={setCrimes} 
          streetSearch={streetSearch}
          selected = {selected}
          setSelected = {setSelected}
          setClues = {setClues}
        />
        <SearchInput setStreetSearch={setStreetSearch} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Clues 
          selected = {selected}
          setSelected = {setSelected}
          setClues = {setClues}
          clues = {clues}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </>
  )
}
