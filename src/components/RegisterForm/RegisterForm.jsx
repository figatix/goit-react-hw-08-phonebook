import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { StyledRegisterBtn, StyledRegisterForm, StyledRegisterLabel } from "./RegisterForm.styled";




export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

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
    // console.log(userRegister);
    e.currentTarget.reset()
    dispatch(register(userRegister))
  }

  return (
    <StyledRegisterForm
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <StyledRegisterLabel>
        Username
        <input
          value={name}
          onChange={onRegisterInput}
          type="text" name="name" />
      </StyledRegisterLabel>
      <StyledRegisterLabel >
        Email
        <input
          value={email}
          onChange={onRegisterInput}
          type="email" name="email" />
      </StyledRegisterLabel>
      <StyledRegisterLabel >
        Password
        <input
          value={password}
          onChange={onRegisterInput}
          type="password" name="password" />
      </StyledRegisterLabel>
      <StyledRegisterBtn type="submit">Register</StyledRegisterBtn>
    </StyledRegisterForm>
  );
};