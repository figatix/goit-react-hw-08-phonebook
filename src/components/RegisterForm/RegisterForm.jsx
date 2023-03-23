import { StyledRegisterForm, StyledRegisterLabel } from "./RegisterForm.styled";


export const RegisterForm = () => {


  return (
    <StyledRegisterForm autoComplete="off">
      <StyledRegisterLabel>
        Username
        <input type="text" name="name" />
      </StyledRegisterLabel>
      <StyledRegisterLabel >
        Email
        <input type="email" name="email" />
      </StyledRegisterLabel>
      <StyledRegisterLabel >
        Password
        <input type="password" name="password" />
      </StyledRegisterLabel>
      <button type="submit">Register</button>
    </StyledRegisterForm>
  );
};