import { Box, TextField } from '@mui/material';

const ConfirmationInput = (props) => {
  const inputsMatch = props.primaryValue === props.confirmationValue;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        value={props.primaryValue}
        sx={{ marginBottom: '1em' }}
        label={props.inputName}
        color="primary"
        error={props.primaryValueInError}
        onChange={props.primaryOnChange}
        type="password"
        id={props.inputName}
      />
      <TextField
        value={props.confirmPassword}
        label={`Confirm ${props.inputName}`}
        color="primary"
        error={!inputsMatch && !props.primaryValueInError}
        onChange={props.confirmationChange}
        type="password"
        id={`Confirm ${props.inputName}`}
      />
    </Box>
  );
};

export default ConfirmationInput;
