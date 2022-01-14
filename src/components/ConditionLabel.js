import { Checkbox, FormControlLabel } from '@mui/material';
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';

const ConditionLabel = ({ isValid, labelText }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="success"
          icon={<RadioButtonUnchecked />}
          checkedIcon={<RadioButtonChecked />}
          disabled={!isValid}
          checked={isValid}
          onClick={(event) => {
            event.preventDefault();
          }}
        />
      }
      label={labelText}
    />
  );
};

export default ConditionLabel;
