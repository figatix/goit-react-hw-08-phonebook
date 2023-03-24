import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

import styled from "styled-components"

export const Header = styled.header`
  display:flex;
  justify-content: space-between;
  width: 100%;
`;






export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)


  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  )
}