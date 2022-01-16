import { Box, Typography, Link } from '@mui/material';

function CardHeader() {
  return (
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
  );
}

export default CardHeader;
