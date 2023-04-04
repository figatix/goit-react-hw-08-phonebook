
import { Avatar, Box, Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function RegisterPage() {
  return (
    <Section>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Sign up
        </Typography>
        <RegisterForm />
      </Box>
    </Section>
  );
}
