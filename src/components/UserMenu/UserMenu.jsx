
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";
import { StyledLogoutBtn, StyledUserMenuUsername, StyledUserMenuWrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <StyledUserMenuWrapper>
      <StyledUserMenuUsername>Laskavo prosymo, {user.name}</StyledUserMenuUsername>
      <StyledLogoutBtn
        onClick={handleLogout}
        type="button"
        variant="outlined"
        color="secondary"
      >Logout</StyledLogoutBtn>
    </StyledUserMenuWrapper>
  );
};


