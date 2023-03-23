import { StyledLoginForm, StyledLoginLabel } from "./LoginForm.styled";


export const LoginForm = () => {


  return (
    <StyledLoginForm autoComplete="off">
      <StyledLoginLabel >
        Email
        <input type="email" name="email" />
      </StyledLoginLabel>
      <StyledLoginLabel >
        Password
        <input type="password" name="password" />
      </StyledLoginLabel>
      <button type="submit">Login</button>
    </StyledLoginForm>
  );
};