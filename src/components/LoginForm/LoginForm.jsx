
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/auth/authOperations";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { fetchContacts } from "redux/contacts/operations";

import { StyledLoginBtn, StyledLoginForm, StyledLoginLabel } from "./LoginForm.styled";
import { toast } from "react-toastify";


export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)


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

    console.log("🚀 ~ file: LoginForm.jsx:14 ~ LoginForm ~ isLoggedIn:", isLoggedIn)

    dispatch(login(existUser))
    if (isLoggedIn) {
      toast(`Hello, ${email}`)

      dispatch(fetchContacts())
      e.currentTarget.reset()
    }
  }

  return (
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
          type="password"
          autoComplete="current-password"
          variant="filled"
          color="secondary"
          value={password}
          onChange={onLoginInput}
          name="password"
        />
      </StyledLoginLabel>
      <StyledLoginBtn
        type="submit"
        variant="contained"
        color="secondary"
      >Login</StyledLoginBtn>
      {/* <StyledLoginBtn type="submit">Login</StyledLoginBtn>       */}
    </StyledLoginForm>
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