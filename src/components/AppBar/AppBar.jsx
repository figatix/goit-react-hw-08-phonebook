import { Toolbar } from "@mui/material";
import { default as AppBarMUI } from '@mui/material/AppBar';

import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

import { Box, Container } from '@mui/material';

import styled from "styled-components"
import { styles } from './AppBar.styled';
import { Logo } from "components/Logo/Logo";

export const StyledToolbar = styled(Toolbar)`
  display:flex;
  justify-content: space-between;
  width: 100%;
`;


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <AppBarMUI position="relative" color="transparent">
      <Container
      >
        <Box sx={styles.headerContentWrap}>
          <Logo />
          <Box sx={styles.navbarWrap}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Box>
      </Container>
    </AppBarMUI>
  )
}



