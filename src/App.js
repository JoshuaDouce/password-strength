import './App.css';
import {
  Card,
  Box,
  CardContent,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText
} from '@mui/material';
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';

function App() {
  return (
    <Box sx={{ minWidth: 300 }}>
      <Card variant="outlined">
        <>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                m: '1em 0'
              }}>
              <Typography variant="h4">Create an account</Typography>
              <Typography variant="subtitle1">Continue to Site</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormControl sx={{ ml: 3 }} component="fieldset" variant="standard" error={true}>
                <TextField
                  sx={{ marginBottom: '1em' }}
                  label="Password"
                  color="primary"
                  error={true}
                />
                <TextField label="ConfirmPassword" color="primary" error={true} />
                <FormHelperText sx={{ fontWeight: 'bold' }}>Passwords do not match</FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormControl sx={{ ml: 3, mt: 1 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Password Strength</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      disabled
                    />
                  }
                  label="Upper case character"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      disabled
                    />
                  }
                  label="Lower case character"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      disabled
                    />
                  }
                  label="Non alphanumeric character eg @"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      disabled
                    />
                  }
                  label="Longer than 7 characters"
                />
              </FormControl>
            </Box>
          </CardContent>
        </>
      </Card>
    </Box>
  );
}

export default App;
