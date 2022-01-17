import React from 'react';
import { FormHelperText, FormControl } from '@mui/material';
import ConfirmationInput from './ConfirmationInput';
import ConditionsList from './ConditionsList';
import { strengthConditions } from '../utils/PasswordStrengthConditions';
import usePasswordConfirmation from '../hooks/usePasswordConfirmation';

function PasswordConfirmation() {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordInvalid,
    passwordsMatch
  } = usePasswordConfirmation();

  return (
    <>
      <FormControl
        sx={{ display: 'flex' }}
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
          <FormHelperText sx={{ fontWeight: 'bold' }} error={passwordInvalid}>
            Passwords is invalid
          </FormHelperText>
        ) : (
          !passwordsMatch && (
            <FormHelperText sx={{ fontWeight: 'bold' }} error={!passwordsMatch}>
              Passwords do not match
            </FormHelperText>
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
