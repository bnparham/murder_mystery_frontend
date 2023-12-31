import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CrimeSence from './Modules/CrimeSence';
import SearchInput from './Modules/SearchInput';
import Clues from './Modules/Clues';
import Encryption from './Modules/Encryption';
import TicTocToe from './Modules/TicTocToe/TicTocToe';

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
  
export default function CrimePageTables({value}) {
  const [crimes, setCrimes] = React.useState([])
  const [selected, setSelected] = React.useState([]);
  const [clues, setClues] = React.useState([]);
  const [page, setPage] = React.useState(0);
  
  // crime scene api search
  const [streetSearch, setStreetSearch] = React.useState('')
  const [crimeSceneSearchDesc, setCrimeSceneSearchDesc] = React.useState('')
  const [crimeSceneSearchDate, setCrimeSceneSearchDate] = React.useState('')

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
          page = {page}
          setPage = {setPage}
        crimeSceneSearchDesc={crimeSceneSearchDesc}
        crimeSceneSearchDate={crimeSceneSearchDate}
        />
        <SearchInput 
        streetSearch={streetSearch} 
        setStreetSearch={setStreetSearch} 
        crimeSceneSearchDate={crimeSceneSearchDate}
        setCrimeSceneSearchDate={setCrimeSceneSearchDate}
        crimeSceneSearchDesc={crimeSceneSearchDesc}
        setCrimeSceneSearchDesc={setCrimeSceneSearchDesc}
        />
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
        <Encryption/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TicTocToe/>
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </>
  )
}
