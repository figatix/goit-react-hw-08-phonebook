
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";
import { StyledLogoutBtn, StyledUserMenuUsername, StyledUserMenuWrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  console.log("🚀 ~ file: UserMenu.jsx:8 ~ UserMenu ~ user:", user)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <StyledUserMenuWrapper>
      <StyledUserMenuUsername>{user.email}</StyledUserMenuUsername>
      <StyledLogoutBtn
        onClick={handleLogout}
        type="button">Logout</StyledLogoutBtn>
    </StyledUserMenuWrapper>
  );
};


