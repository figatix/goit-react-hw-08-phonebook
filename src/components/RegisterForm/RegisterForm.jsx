

import { FormHelperText, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledRegisterBtn, StyledRegisterForm, StyledRegisterLabel, styles } from "./RegisterForm.styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupSchema } from "./inputYupValidation";
import { register } from "redux/auth/authOperations";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";


export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()


  const { register: reactRegister, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(yupSchema) });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const onSubmitRegisterForm = (data) => {
    console.log("🚀 ~ file: RegisterForm.jsx:50 ~ onSubmitRegisterForm ~ data:", data)
    const { name, password, email } = data

    const userRegister = {
      name,
      email,
      password,
    }

    dispatch(register(userRegister)).unwrap()
      .then((res) => {
        toast.success(`User ${res.user.name} successfully registered!`);
      }).catch((err) => {
        toast.error(`Oops! Something went wrong... ${err}`);
      });

    reset()
  }

  return (
    <>
      <StyledRegisterForm
        onSubmit={handleSubmit(onSubmitRegisterForm)}
        autoComplete="off"
      >
        <StyledRegisterLabel>
          <TextField
            required
            label="Username"
            type="text"
            variant="filled"
            color="secondary"
            {...reactRegister("name", { required: 'This field is required.' })}
          />
          <FormHelperText
            component={ErrorMessage}
            errors={errors}
            name='name'
            render={({ message }) => (
              <Typography sx={{ color: 'error.main', fontSize: "12px" }}>{message}</Typography>
            )}
          />
        </StyledRegisterLabel>

        <StyledRegisterLabel >
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            variant="filled"
            color="secondary"
            {...reactRegister("email", { required: 'This field is required.' })}
          />
          <FormHelperText
            component={ErrorMessage}
            errors={errors}
            name='email'
            render={({ message }) => (
              <Typography sx={{ color: 'error.main', fontSize: "12px" }}>{message}</Typography>
            )}
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
            {...reactRegister("password", { required: 'This field is required.' })}
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
