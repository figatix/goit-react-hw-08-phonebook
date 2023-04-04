
import { IconButton, InputAdornment, Link, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/auth/authOperations";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { fetchContacts } from "redux/contacts/operations";

import { StyledLoginBtn, StyledLoginForm, StyledLoginLabel, styles } from "./LoginForm.styled";
import { toast } from "react-toastify";

import { Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";


export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const onLoginInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email': {
        return setEmail(value)
      }
      case 'password': {
        return setPassword(value)
      }
      default: return
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const existUser = {
      email,
      password,
    }

    dispatch(login(existUser))
    if (isLoggedIn) {
      toast(`Hello, ${email}`)

      dispatch(fetchContacts())
      e.currentTarget.reset()
    }
  }

  return (
    <>
      <StyledLoginForm
        onSubmit={handleLoginSubmit}
        autoComplete="off">
        <StyledLoginLabel >
          <TextField
            fullWidth
            required
            label="Email"
            variant="filled"
            color="secondary"
            value={email}
            onChange={onLoginInput}
            type="email"
            name="email"
          />
        </StyledLoginLabel>
        <StyledLoginLabel >
          <TextField
            required
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            variant="filled"
            color="secondary"
            value={password}
            onChange={onLoginInput}
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
        </StyledLoginLabel>

        <StyledLoginBtn
          type="submit"
          variant="contained"
          color="secondary"
        >Login</StyledLoginBtn>

      </StyledLoginForm>

      <Link component={RouterLink}
        sx={styles.routerLink}
        to="/register">
        Don't have an account? Register
      </Link>
    </>

  );
};









// ****************************

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "redux/auth/authOperations";
// import { selectIsLoggedIn } from "redux/auth/authSelectors";
// import { fetchContacts } from "redux/contacts/operations";

// import { StyledLoginBtn, StyledLoginForm, StyledLoginLabel } from "./LoginForm.styled";


// export const LoginForm = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn)

//   const onLoginInput = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'email': {
//         return setEmail(value)
//       }
//       case 'password': {
//         return setPassword(value)
//       }
//       default: return
//     }
//   }

//   const handleLoginSubmit = (e) => {
//     e.preventDefault()
//     const existUser = {
//       email,
//       password,
//     }

//     console.log("🚀 ~ file: LoginForm.jsx:14 ~ LoginForm ~ isLoggedIn:", isLoggedIn)


//     dispatch(login(existUser))
//     if (isLoggedIn) {
//       dispatch(fetchContacts())
//       e.currentTarget.reset()
//       // reset()
//     }
//   }

//   // const reset = () => {
//   //   setEmail('')
//   //   setPassword('')
//   // }

//   return (
//     <StyledLoginForm
//       onSubmit={handleLoginSubmit}
//       autoComplete="off">
//       <StyledLoginLabel >
//         Email
//         <input
//           value={email}
//           onChange={onLoginInput}
//           type="email" name="email" />
//       </StyledLoginLabel>
//       <StyledLoginLabel >
//         Password
//         <input
//           value={password}
//           onChange={onLoginInput}
//           type="password" name="password"
//           autoComplete="on"
//         />
//       </StyledLoginLabel>
//       <StyledLoginBtn type="submit">Login</StyledLoginBtn>
//     </StyledLoginForm>
//   );
// };