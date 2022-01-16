import React, { useState } from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  Link,
  FormHelperText,
  FormControl
} from '@mui/material';
import { isValid } from '../utils/PasswordUtils';
import ConfirmationInput from './ConfirmationInput';
import ConditionsList from './ConditionsList';
import { strengthConditions } from '../utils/PasswordStrengthConditions';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordsDoNotMatch = password !== confirmPassword;
  const passwordInvalid = !isValid(password) && password !== '';

  /**
   * TODO: Currently this re-renders the entire card. Encapsulate the inputs and indicatiors
   * TODO: Add a delay to error messages showing until the user has stopped typing
   */

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card sx={{ m: '1em' }} variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              m: '1em 0'
            }}>
            <Typography variant="h4">Create an account</Typography>
            <Link href="#" variant="subtitle1">
              Continue to Site
            </Link>
          </Box>
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreatePassword;
