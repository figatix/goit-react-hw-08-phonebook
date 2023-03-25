import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";
import { fetchContacts } from "redux/operations";
import { StyledLoginBtn, StyledLoginForm, StyledLoginLabel } from "./LoginForm.styled";


export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

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
    dispatch(fetchContacts())
  }

  return (
    <StyledLoginForm
      onSubmit={handleLoginSubmit}
      autoComplete="off">
      <StyledLoginLabel >
        Email
        <input
          value={email}
          onChange={onLoginInput}
          type="email" name="email" />
      </StyledLoginLabel>
      <StyledLoginLabel >
        Password
        <input
          value={password}
          onChange={onLoginInput}
          type="password" name="password" />
      </StyledLoginLabel>
      <StyledLoginBtn type="submit">Login</StyledLoginBtn>
    </StyledLoginForm>
  );
};