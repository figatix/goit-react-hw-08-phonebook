import { Toolbar } from "@mui/material";
// import { Button, IconButton, Typography } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import { default as AppBarMUI } from '@mui/material/AppBar';
// import  AppBarMUI  from '@mui/material/AppBar';

import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

import { Box, Container} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { MobileMenu } from 'components/MobileMenu';

import styled from "styled-components"
import { styles } from './AppBar.styled';
// import { useState } from "react";
import { Logo } from "components/Logo/Logo";

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

  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  return (
<AppBarMUI position="relative" color="transparent">
      <Container 
      
      >
        <Box sx={styles.headerContentWrap}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.menuIconBtn}
          >
            <MenuIcon />
          </IconButton> */}
          {/* {mobileOpen && <MobileMenu onMenuClose={handleDrawerToggle} />} */}
          <Logo />
          <Box sx={styles.navbarWrap}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Box>
      </Container>
    </AppBarMUI>

    // *** MUI
    // <AppBarMUI position="static" color="transparent">
    //   <StyledToolbar>
    //     {/* <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton> */}
    //     <Navigation />
    //     {isLoggedIn ? <UserMenu /> : <AuthNav />}
    //     {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color="inherit">Login</Button> */}
    //   </StyledToolbar>
    // </AppBarMUI>

  )
}



