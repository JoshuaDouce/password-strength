import { Box, TextField } from '@mui/material';

const ConfirmationInput = ({
  primaryValue,
  confirmationValue,
  inputName,
  primaryValueInError,
  primaryOnChange,
  confirmPassword,
  confirmationChange
}) => {
  const inputsMatch = primaryValue === confirmationValue;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        value={primaryValue}
        sx={{ marginBottom: '1em' }}
        label={inputName}
        color="primary"
        error={primaryValueInError}
        onChange={primaryOnChange}
        type="password"
        id={inputName}
      />
      <TextField
        value={confirmPassword}
        label={`Confirm ${inputName}`}
        color="primary"
        error={!inputsMatch && !primaryValueInError}
        onChange={confirmationChange}
        type="password"
        id={`Confirm ${inputName}`}
      />
    </Box>
  );
};

export default ConfirmationInput;
