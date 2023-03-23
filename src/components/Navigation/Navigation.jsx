
import { StyledNavLink } from './Navigation.styled';


export const Navigation = () => {


  return (
    <nav>
      <StyledNavLink to="/">
        Home
      </StyledNavLink>

      <StyledNavLink to="/phonebook">
        Phonebook
      </StyledNavLink>

    </nav>
  );
};
