import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SecurityCameras from './Modules/SecurityCameras';
import SecuritySearchInput from './Modules/SecuritySearchInput';
import SecurityRadioButton from './Modules/SecurityRadioButton';

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
  
export default function CityPageTables({value}) {

  const [securitySearch, setSecuritySearch] = React.useState('')
  const [securityData, setSecurityData] = React.useState([])
  const [radio, setRadio] = React.useState('')

  return (
    <>
      <TabPanel value={value} index={0}>
        <SecurityCameras 
          securitySearch={securitySearch} 
          securityData={securityData} 
          setSecurityData={setSecurityData}
          radio = {radio}
          />
        <SecuritySearchInput
          securitySearch={securitySearch} 
          setSecuritySearch={setSecuritySearch}
          securityData={securityData} 
          setSecurityData={setSecurityData}
          setRadio = {setRadio}
         />
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
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
