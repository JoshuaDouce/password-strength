import React, { useEffect, useState } from 'react';
import { FormHelperText, FormControl } from '@mui/material';
import { isValid } from '../utils/PasswordUtils';
import ConfirmationInput from './ConfirmationInput';
import ConditionsList from './ConditionsList';
import { strengthConditions } from '../utils/PasswordStrengthConditions';

function PasswordConfirmation() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(password === confirmPassword);
  const [passwordInvalid, setPasswordInvalid] = useState(!isValid(password) && password !== '');

  useEffect(() => {
    const evaluateInputTimeout = setTimeout(() => {
      setPasswordInvalid(!isValid(password) && password !== '');
      setPasswordsMatch(password === confirmPassword);
    }, 500);
    return () => clearTimeout(evaluateInputTimeout);
  }, [password, confirmPassword]);

  return (
    <>
      <FormControl
        sx={{ ml: 3, display: 'flex' }}
        component="fieldset"
        variant="standard"
        error={passwordsMatch || passwordInvalid}>
        <ConfirmationInput
          inputName="Password"
          inputsMatch={passwordsMatch}
          primaryValue={password}
          primaryValueInError={passwordInvalid}
          confirmationValue={confirmPassword}
          primaryOnChange={(event) => {
            setPassword(event.target.value);
          }}
          confirmationChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        {passwordInvalid ? (
          <FormHelperText sx={{ fontWeight: 'bold' }}>Passwords is invalid</FormHelperText>
        ) : (
          !passwordsMatch && (
            <FormHelperText sx={{ fontWeight: 'bold' }}>Passwords do not match</FormHelperText>
          )
        )}
      </FormControl>
      <ConditionsList
        inputForConditions={password}
        conditions={strengthConditions}
        legend="Password Strength"
      />
    </>
  );
}

export default PasswordConfirmation;
