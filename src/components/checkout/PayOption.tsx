import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Typography,
} from '@mui/material';
import * as React from 'react';

interface PayOptionProps {
  option?: any;
}

const PayOption: React.FunctionComponent<PayOptionProps> = ({ option }) => {
  if (!option)
    return (
      <Box textAlign="center">
        <Typography variant="h5">Cash on delivery</Typography>
        <Typography>Pay with cash upon delivery.</Typography>
      </Box>
    );
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default PayOption;
