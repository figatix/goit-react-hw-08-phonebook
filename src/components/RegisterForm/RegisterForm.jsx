

import { IconButton, InputAdornment, Link, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { StyledRegisterBtn, StyledRegisterForm, StyledRegisterLabel, styles } from "./RegisterForm.styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";




export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onRegisterInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name': {
        return setName(value)
      }
      case 'email': {
        return setEmail(value)
      }
      case 'password': {
        return setPassword(value)
      }
      default: return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userRegister = {
      name,
      email,
      password,
    }
    e.currentTarget.reset()
    dispatch(register(userRegister))
  }

  return (
    <>
      <StyledRegisterForm
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <StyledRegisterLabel>
          <TextField
            required
            label="Username"
            onChange={onRegisterInput}
            value={name}
            name="name"
            type="text"
            variant="filled"
            color="secondary"
          />
        </StyledRegisterLabel>

        <StyledRegisterLabel >
          <TextField
            fullWidth
            required
            label="Email"
            value={email}
            onChange={onRegisterInput}
            type="email"
            name="email"
            variant="filled"
            color="secondary"
          />
        </StyledRegisterLabel>
        <StyledRegisterLabel >
          <TextField
            fullWidth
            required
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            variant="filled"
            color="secondary"
            value={password}
            onChange={onRegisterInput}
            name="password"
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>,
            }}
          />
        </StyledRegisterLabel>
        <StyledRegisterBtn
          type="submit"
          variant="contained"
          color="secondary"
        >Register</StyledRegisterBtn>
      </StyledRegisterForm>

      <Link component={RouterLink}
        sx={styles.routerLink}
        to="/login">
        Already have an account? Log in
      </Link>
    </>
  );
};



// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { register } from "redux/auth/authOperations";
// import { StyledRegisterBtn, StyledRegisterForm, StyledRegisterLabel } from "./RegisterForm.styled";


// export const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const dispatch = useDispatch()

//   const onRegisterInput = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case 'name': {
//         return setName(value)
//       }
//       case 'email': {
//         return setEmail(value)
//       }
//       case 'password': {
//         return setPassword(value)
//       }
//       default: return;
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const userRegister = {
//       name,
//       email,
//       password,
//     }
//     // console.log(userRegister);
//     e.currentTarget.reset()
//     // reset()
//     dispatch(register(userRegister))
//   }

//   // const reset = () => {
//   //   setName('')
//   //   setEmail('')
//   //   setPassword('')
//   // }

//   return (
//     <StyledRegisterForm
//       onSubmit={handleSubmit}
//       autoComplete="off"
//     >
//       <StyledRegisterLabel>
//         Username
//         <input
//           value={name}
//           onChange={onRegisterInput}
//           type="text" name="name" />
//       </StyledRegisterLabel>
//       <StyledRegisterLabel >
//         Email
//         <input
//           value={email}
//           onChange={onRegisterInput}
//           type="email" name="email" />
//       </StyledRegisterLabel>
//       <StyledRegisterLabel >
//         Password
//         <input
//           value={password}
//           onChange={onRegisterInput}
//           type="password" name="password"
//           autoComplete="on"
//         />
//       </StyledRegisterLabel>
//       <StyledRegisterBtn type="submit">Register</StyledRegisterBtn>
//     </StyledRegisterForm>
//   );
// };