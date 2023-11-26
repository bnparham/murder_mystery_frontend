import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SecurityCameras from './Modules/SecurityCamera/SecurityCameras';
import SecuritySearchInput from './Modules/SecurityCamera/SecuritySearchInput';
import PhoneCalls from './Modules/PhoneCalls/PhoneCalls';
import InterViews from './Modules/InterViews/InterViews';
import BankAccount from './Modules/Bank Account/BankAccount';
import Atm from './Modules/Atm/Atm';
import Airport from './Modules/Airports/Airport';
import Flight from './Modules/Flights/Flight';
import Passenger from './Modules/Passengers/Passenger';
import Street from './Modules/Street/Street';
import Person from './Modules/Person/Person';
import LocationSearchInput from './Modules/Street/LocationtSearchInput';
import PhoneCallSearchInput from './Modules/PhoneCalls/PhoneCallSearchInput';
import InterViewSearchInput from './Modules/InterViews/InterViewSearchInput';
import BankAccountSearchInput from './Modules/Bank Account/BankAccountSearchInput';
import AtmSearchInput from './Modules/Atm/AtmSearchInput';
import AirportSearchInput from './Modules/Airports/AirportSearchInput';


// img address
import interviewCardImg from '../../../img/interviewCardImg.png'
import ATMCardImg from '../../../img/ATMCardImg.png'
import phoneCallsCardImg from '../../../img/phoneCallsCard.png'
import securityCameraCardImg from '../../../img/securityCameraCard.png'
import BankAccountImg from '../../../img/BankAccountImg.png'
import AirportImg from '../../../img/AirportImg.png'
import flightCardImg from '../../../img/flightCardImg.png'
import streetCardImg from '../../../img/streetCardImg.png'
import passengerCardImg from '../../../img/passengerCardImg.png'
import personCardImg from '../../../img/personCardImg.png'
// dark iamges
import AtmDark from '../../../img/AtmDark.png'
import interviewDark from '../../../img/interviewDark.png'
import BankAccountDark from '../../../img/BankAccountDark.png'
import flightDark from '../../../img/flightDark.png'
import passengerDark from '../../../img/passengerDark.png'
import personDark from '../../../img/personDark.png'
import phoneDark from '../../../img/phoneDark.png'
import cameraDark from '../../../img/cameraDark.png'
import AirportDark from '../../../img/AirportDark.png'
import FlightSearchInput from './Modules/Flights/FlightSearchInput';




export const imgs = {
  'interviewCardImg' : interviewCardImg,
  'ATMCardImg': ATMCardImg,
  'phoneCallsCardImg' : phoneCallsCardImg,
  'securityCameraCardImg' : securityCameraCardImg,
  'BankAccountImg' : BankAccountImg,
  'AirportImg' : AirportImg,
  'flightCardImg' : flightCardImg,
  'streetCardImg' : streetCardImg,
  'passengerCardImg' : passengerCardImg,
  'personCardImg' : personCardImg,
  'AtmDark' : AtmDark,
  'interviewDark' : interviewDark,
  'BankAccountDark' : BankAccountDark,
  'flightDark' : flightDark,
  'passengerDark' : passengerDark,
  'personDark' : personDark,
  'phoneDark' : phoneDark,
  'cameraDark' : cameraDark,
  'AirportDark' : AirportDark,
}


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
  const [securitySearchDate, setSecuritySearchDate] = React.useState('')

  // phoneCalls section
  const [phoneData, setPhoneData] = React.useState([])
  const [phoneCallSearch, setPhoneCallSearch] = React.useState([])
  const [phoneCallSearchCaller, setPhoneCallSearchCaller] = React.useState([])
  const [phoneCallSearchDate, setPhoneCallSearchDate] = React.useState('')

  // interView section
  const [interviewData, setInterviewData] = React.useState([])
  const [interviewSearchDate, setInterViewSearchDate] = React.useState('')


  // bank section
  const [bankData, setBankData] = React.useState([])
  const [atmStreetSearch, setAtmStreetSearch] = React.useState([])
  const [atmSearchDate, setAtmSearchDate] = React.useState('')
  const [atmRadio, setAtmRadio] = React.useState('')

  // atm section
  const [atmData, setAtmData] = React.useState([])
  const [bankAccountSearch, setBankAccountSearch] = React.useState([])
  const [bankAccountSearchDate, setBankAccountSearchDate] = React.useState('')


  // airport section
  const [airportData, setAirportData] = React.useState([])
  const [airportSearch, setAirportSearch] = React.useState([])


  // flight section
  const [flightData, setFlightData] = React.useState([])
  const [flightSearch, setFlightSearch] = React.useState('')
  const [flightRadio, setFlightRadio] = React.useState('')
  const [flightSearchDate, setFlightSearchDate] = React.useState('')

  // passenger section
  const [passengerData, setPassengerData] = React.useState([])

  // location section
  const [streetData, setStreetData] = React.useState([])
  const [locationSearch, setLocationSearch] = React.useState('')

  // persom section
  const [personData, setPersonData] = React.useState([])

  return (
    <>
      <TabPanel value={value} index={0}>
        <SecurityCameras 
          securitySearch={securitySearch} 
          securityData={securityData} 
          setSecurityData={setSecurityData}
          securityRadio = {securityRadio}
          securitySearchDate = {securitySearchDate}
          />
        <SecuritySearchInput
          securitySearch={securitySearch} 
          setSecuritySearch={setSecuritySearch}
          securityData={securityData} 
          setSecurityData={setSecurityData}
          setSecurityRadio = {setSecurityRadio}
          securitySearchDate = {securitySearchDate}
          setSecuritySearchDate = {setSecuritySearchDate}
         />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PhoneCalls 
          phoneData = {phoneData}
          setPhoneData = {setPhoneData}
          phoneCallSearch = {phoneCallSearch}
          phoneCallSearchDate = {phoneCallSearchDate}
          phoneCallSearchCaller = {phoneCallSearchCaller}
        />
        <PhoneCallSearchInput
          phoneCallSearch = {phoneCallSearch}
          setPhoneCallSearch = {setPhoneCallSearch}
          phoneCallSearchDate = {phoneCallSearchDate}
          setPhoneCallSearchDate = {setPhoneCallSearchDate}
          phoneCallSearchCaller = {phoneCallSearchCaller}
          setPhoneCallSearchCaller = {setPhoneCallSearchCaller}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InterViews
          interviewData = {interviewData}
          setInterviewData = {setInterviewData}
          interviewSearchDate = {interviewSearchDate}
        />
        <InterViewSearchInput
          interviewSearchDate = {interviewSearchDate}
          setInterViewSearchDate = {setInterViewSearchDate}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BankAccount
          bankData = {bankData}
          setBankData = {setBankData}
          bankAccountSearch = {bankAccountSearch}
          bankAccountSearchDate = {bankAccountSearchDate}
        />
        <BankAccountSearchInput
          bankAccountSearch = {bankAccountSearch}
          bankAccountSearchDate = {bankAccountSearchDate} 
          setBankAccountSearch = {setBankAccountSearch}
          setBankAccountSearchDate = {setBankAccountSearchDate}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Atm
          atmData = {atmData}
          setAtmData = {setAtmData}
          atmStreetSearch = {atmStreetSearch}
          atmRadio = {atmRadio}
          atmSearchDate = {atmSearchDate}
        />
        <AtmSearchInput
          atmStreetSearch = {atmStreetSearch}
          atmSearchDate = {atmSearchDate}
          setAtmStreetSearch = {setAtmStreetSearch}
          setAtmRadio = {setAtmRadio}
          setAtmSearchDate = {setAtmSearchDate}
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Airport
          airportData = {airportData}
          setAirportData = {setAirportData}
          airportSearch = {airportSearch}
        />
        <AirportSearchInput
          airportSearch = {airportSearch}
          setAirportSearch = {setAirportSearch}
        />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Flight
          flightData = {flightData}
          setFlightData = {setFlightData}
          flightSearch = {flightSearch}
          flightRadio = {flightRadio}
          flightSearchDate = {flightSearchDate}
        />
        <FlightSearchInput
          flightSearch = {flightSearch}
          flightRadio = {flightRadio}
          flightSearchDate = {flightSearchDate}
          setFlightSearch = {setFlightSearch}
          setFlightRadio = {setFlightRadio}
          setFlightSearchDate = {setFlightSearchDate}
        />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Passenger
          passengerData = {passengerData}
          setPassengerData = {setPassengerData}
        />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Street
          streetData = {streetData}
          setStreetData = {setStreetData}
          locationSearch = {locationSearch}
        />
        <LocationSearchInput
          locationSearch = {locationSearch}
          setLocationSearch = {setLocationSearch}
        />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Person
          personData={personData}
          setPersonData={setPersonData}
        />
      </TabPanel>
    </>
  )
}
