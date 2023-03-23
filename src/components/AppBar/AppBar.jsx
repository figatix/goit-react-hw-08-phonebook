import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";

import styled from "styled-components"

export const Header = styled.header`
  display:flex;
  justify-content: space-between;
  width: 100%;
`;

export const AppBar = () => {


  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  )
}