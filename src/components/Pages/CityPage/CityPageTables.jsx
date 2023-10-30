import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SecurityCameras from './Modules/SecurityCamera/SecurityCameras';
import SecuritySearchInput from './Modules/SecurityCamera/SecuritySearchInput';
import PhoneCalls from './Modules/PhoneCalls/PhoneCalls';
import InterViews from './Modules/InterViews/InterViews';



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

  // securityLogs Section
  const [securitySearch, setSecuritySearch] = React.useState('')
  const [securityData, setSecurityData] = React.useState([])
  const [securityRadio, setSecurityRadio] = React.useState('')
  
  // phoneCalls section
  const [phoneData, setPhoneData] = React.useState([])

  // interView section
  const [interviewData, setInterviewData] = React.useState('')

  return (
    <>
      <TabPanel value={value} index={0}>
        <SecurityCameras 
          securitySearch={securitySearch} 
          securityData={securityData} 
          setSecurityData={setSecurityData}
          securityRadio = {securityRadio}
          />
        <SecuritySearchInput
          securitySearch={securitySearch} 
          setSecuritySearch={setSecuritySearch}
          securityData={securityData} 
          setSecurityData={setSecurityData}
          setSecurityRadio = {setSecurityRadio}
         />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PhoneCalls 
          phoneData = {phoneData}
          setPhoneData = {setPhoneData}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InterViews
          interviewData = {interviewData}
          setInterviewData = {setInterviewData}
        />
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
