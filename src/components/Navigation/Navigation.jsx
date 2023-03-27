
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledNavLink } from './Navigation.styled';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <nav>
      <StyledNavLink to="/">
        Home
      </StyledNavLink>
      {isLoggedIn &&
        <StyledNavLink to="/phonebook">
          Phonebook
        </StyledNavLink>
      }

    </nav>
  );
};
