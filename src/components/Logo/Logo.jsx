import { Box, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from 'react-router-dom';
import { styles } from './Logo.styled';

export const Logo = () => (
  <Box component={Link} to="/" sx={styles.wrap}>
    <PersonPinIcon fontSize="large" />
    <Typography component="span" variant="h4">
      PhoneBook
    </Typography>
  </Box>
);