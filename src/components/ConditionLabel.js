import { Checkbox, FormControlLabel } from '@mui/material';
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';

const ConditionLabel = (props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="success"
          icon={<RadioButtonUnchecked />}
          checkedIcon={<RadioButtonChecked />}
          disabled={!props.isValid}
          checked={props.isValid}
          onClick={(event) => {
            event.preventDefault();
          }}
        />
      }
      label={props.labelText}
    />
  );
};

export default ConditionLabel;
