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
  const strengthConditions = [
    [hasUpperCase, 'Upper case character'],
    [hasLowerCase, 'Lower case character'],
    [hasSpecialCharacter, 'Special character'],
    [hasNumber, 'Numeric character'],
    [isLongEnough, 'Longer than 7 characters']
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ ml: 3, mt: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Password Strength</FormLabel>
        <>
          {strengthConditions.map((condition) => (
            <ConditionLabel
              key={condition[1]}
              labelText={condition[1]}
              isValid={condition[0](props.password)}></ConditionLabel>
          ))}
        </>
      </FormControl>
    </Box>
  );
};

export default PasswordStrengthIndicator;
