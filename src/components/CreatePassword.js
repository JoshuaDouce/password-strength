import React from 'react';
import { Card, Box, CardContent } from '@mui/material';
import CardHeader from './CardHeader';
import PasswordConfirmation from './PasswordConfirmation';

const CreatePassword = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: '1em', minWidth: 300 }}>
      <Card sx={{ m: '1em' }} variant="outlined">
        <CardContent>
          <CardHeader />
          <PasswordConfirmation />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreatePassword;
