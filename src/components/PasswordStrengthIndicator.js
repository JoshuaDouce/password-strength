import { Box, FormControl, FormLabel } from '@mui/material';
import {
  hasUpperCase,
  hasLowerCase,
  hasSpecialCharacter,
  hasNumber,
  isLongEnough
} from '../utils/PasswordUtils';
import ConditionLabel from './ConditionLabel';

/**
 * TODO: This can be made more generic to just be a conditions list and take a list of conditions
 * TODO: strengthConditions can be refactored into an object then use the destructed object rather
 * than the indexers in the map function
 */

const PasswordStrengthIndicator = ({ password }) => {
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
              isValid={condition[0](password)}></ConditionLabel>
          ))}
        </>
      </FormControl>
    </Box>
  );
};

export default PasswordStrengthIndicator;
