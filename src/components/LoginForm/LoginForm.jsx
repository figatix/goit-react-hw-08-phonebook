
import { FormHelperText, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";

import { StyledLoginBtn, StyledLoginForm, StyledLoginLabel, styles } from "./LoginForm.styled";

import { Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { yupSchema } from "./inputYupValidation";
import { toast } from "react-toastify";



export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmitReactHookForm = async data => {
    try {
      const res = await dispatch(login(data)).unwrap();
      console.log(res);
      toast.success(`User ${res.user.name} was successfully entered!`)
      reset()
    } catch (error) {
      toast.error(`Something went wrong... ${error}`)
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <StyledLoginForm
        onSubmit={handleSubmit(onSubmitReactHookForm)}
        autoComplete="off">
        <StyledLoginLabel >
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            variant="filled"
            color="secondary"
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
        </StyledLoginLabel>
        <StyledLoginLabel >
          <TextField
            required
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            variant="filled"
            color="secondary"
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


