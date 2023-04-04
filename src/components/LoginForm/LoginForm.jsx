
import { FormHelperText, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";
// import { selectIsLoggedIn } from "redux/auth/authSelectors";
// import { fetchContacts } from "redux/contacts/operations";

import { StyledLoginBtn, StyledLoginForm, StyledLoginLabel, styles } from "./LoginForm.styled";
// import { toast } from "react-toastify";

import { Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { yupSchema } from "./inputYupValidation";


export const LoginForm = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmitReactHookForm = data => {
    console.log(data);
    dispatch(login(data))
    reset()

  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const onLoginInput = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'email': {
  //       return setEmail(value)
  //     }
  //     case 'password': {
  //       return setPassword(value)
  //     }
  //     default: return
  //   }
  // }

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault()
  //   const existUser = {
  //     email,
  //     password,
  //   }

  //   dispatch(login(existUser))
  //   if (isLoggedIn) {
  //     toast(`Hello, ${email}`)

  //     dispatch(fetchContacts())
  //     e.currentTarget.reset()
  //   }
  // }


  return (
    <>
      <StyledLoginForm
        onSubmit={handleSubmit(onSubmitReactHookForm)}
        // onSubmit={handleLoginSubmit}
        autoComplete="off">
        <StyledLoginLabel >
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            variant="filled"
            color="secondary"
            // value={email}
            // onChange={onLoginInput}
            // name="email"
            {...register("email", { required: 'This field is required.' })}
          />
          <FormHelperText
            component={ErrorMessage}
            errors={errors}
            name='email'
            render={({ message }) => (
              <Typography sx={{ color: 'error.main', fontSize: '12px' }}>{message}</Typography>
            )}
          />
          <p>{errors.email?.message}</p>
        </StyledLoginLabel>
        <StyledLoginLabel >
          <TextField
            required
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            variant="filled"
            color="secondary"
            // value={password}
            // onChange={onLoginInput}
            // name="password"
            {...register("password", { required: 'This field is required.' })}
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
          <FormHelperText
            component={ErrorMessage}
            errors={errors}
            name='password'
            render={({ message }) => (
              <Typography sx={{ color: 'error.main', fontSize: "12px" }}>{message}</Typography>
            )}
          />
          {/* <p>{errors.password?.message}</p> */}
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


