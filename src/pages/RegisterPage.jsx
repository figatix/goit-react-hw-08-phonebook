
import { Avatar, Box, Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Helmet } from 'react-helmet';

export default function RegisterPage() {
  return (
    // <div>
    //   <Helmet>
    //     <title>Registration</title>
    //   </Helmet>

    //   <RegisterForm />
    // </div>

    <Section>
      <Box
        sx={{
          // marginTop: 6,
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
        // sx={{ mb: 3 }}
        >
          Sign up
        </Typography>
        <RegisterForm />
      </Box>
    </Section>
  );
}
