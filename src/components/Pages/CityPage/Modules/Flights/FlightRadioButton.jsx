import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FlightRadioButton({setFlightRadio}) {


  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">فیلتر بر اساس پرواز</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        onChange={(e) => setFlightRadio(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="نمایش همه" />
        <FormControlLabel value="local" control={<Radio />} label="داخلی" />
        <FormControlLabel value="international" control={<Radio />} label="خارجی" />
      </RadioGroup>
    </FormControl>
  );
}