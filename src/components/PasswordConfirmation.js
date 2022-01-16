import React, { useState } from 'react';
import { FormHelperText, FormControl } from '@mui/material';
import { isValid } from '../utils/PasswordUtils';
import ConfirmationInput from './ConfirmationInput';
import ConditionsList from './ConditionsList';
import { strengthConditions } from '../utils/PasswordStrengthConditions';

function PasswordConfirmation() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordsDoNotMatch = password !== confirmPassword;
  const passwordInvalid = !isValid(password) && password !== '';

  return (
    <>
      <FormControl
        sx={{ ml: 3, display: 'flex' }}
        component="fieldset"
        variant="standard"
        error={passwordsDoNotMatch || passwordInvalid}>
        <ConfirmationInput
          inputName="Password"
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
          passwordsDoNotMatch && (
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
