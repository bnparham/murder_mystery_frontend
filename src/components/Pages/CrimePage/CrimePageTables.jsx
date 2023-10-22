import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CrimeSence from './Modules/CrimeSence';
import SearchInput from './Modules/SearchInput';
import Clues from './Modules/Clues';
import Encryption from './Modules/Encryption';

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
  const [streetSearch, setStreetSearch] = React.useState('')
  const [crimes, setCrimes] = React.useState([])
  const [selected, setSelected] = React.useState([]);
  const [clues, setClues] = React.useState([]);
  const [page, setPage] = React.useState(0);

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
        />
        <SearchInput streetSearch={streetSearch} setStreetSearch={setStreetSearch} />
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
