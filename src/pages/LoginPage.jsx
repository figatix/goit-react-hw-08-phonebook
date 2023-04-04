
import { Avatar, Box, Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Section } from 'components/Section/Section';

export default function LoginPage() {
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
          Sign in
        </Typography>
        <LoginForm />
      </Box>
    </Section>
  );
}

