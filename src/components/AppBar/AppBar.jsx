import { Toolbar, } from "@mui/material";
// import { Button, IconButton, Typography } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import { default as AppBarMUI } from '@mui/material/AppBar';
// import  AppBarMUI  from '@mui/material/AppBar';

import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

import styled from "styled-components"

// export const Header = styled.header`
//   display:flex;
//   justify-content: space-between;
//   width: 100%;
// `;

export const StyledToolbar = styled(Toolbar)`
  display:flex;
  justify-content: space-between;
  width: 100%;
`;


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)


  return (
    // <Header>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </Header>


    // *** MUI
    // <Box>
    <AppBarMUI position="static" color="transparent">
      <StyledToolbar>
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
      </StyledToolbar>
    </AppBarMUI>
    // </Box>
  )
}



