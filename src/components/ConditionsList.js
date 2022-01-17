import { Box, FormControl, FormLabel } from '@mui/material';
import ConditionLabel from './ConditionLabel';

const ConditionsList = ({ inputForConditions, conditions, legend }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ mt: 1 }} component="fieldset" variant="standard">
        {legend && <FormLabel component="legend">{legend}</FormLabel>}
        <>
          {conditions.map(({ condition, label }) => (
            <ConditionLabel
              key={label}
              labelText={label}
              isValid={condition(inputForConditions)}></ConditionLabel>
          ))}
        </>
      </FormControl>
    </Box>
  );
};

export default ConditionsList;
