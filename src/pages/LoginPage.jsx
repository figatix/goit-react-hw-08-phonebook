



import { Avatar, Box, Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
// import { Helmet } from 'react-helmet';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Section } from 'components/Section/Section';

export default function LoginPage() {
  return (

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
          Sign in
        </Typography>
        <LoginForm />
      </Box>
    </Section>


    // <div>
    //   <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
    //       Sign in
    //     </Typography>
    //   <Helmet>
    //     <title>Log In</title>
    //   </Helmet>

    //   <LoginForm />

    // </div>

  );
}

