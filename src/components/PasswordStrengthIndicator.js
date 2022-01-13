import { Box, FormControl, FormLabel } from '@mui/material';
import {
  hasUpperCase,
  hasLowerCase,
  hasSpecialCharacter,
  hasNumber,
  isLongEnough
} from '../utils/PasswordUtils';
import ConditionLabel from './ConditionLabel';

const PasswordStrengthIndicator = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ ml: 3, mt: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Password Strength</FormLabel>
        <ConditionLabel
          labelText="Upper case character"
          isValid={hasUpperCase(props.password)}></ConditionLabel>
        <ConditionLabel
          labelText="Lower case character"
          isValid={hasLowerCase(props.password)}></ConditionLabel>
        <ConditionLabel
          labelText="Special character"
          isValid={hasSpecialCharacter(props.password)}></ConditionLabel>
        <ConditionLabel
          labelText="Numeric character"
          isValid={hasNumber(props.password)}></ConditionLabel>
        <ConditionLabel
          labelText="Longer than 7 characters"
          isValid={isLongEnough(props.password)}></ConditionLabel>
      </FormControl>
    </Box>
  );
};

export default PasswordStrengthIndicator;
