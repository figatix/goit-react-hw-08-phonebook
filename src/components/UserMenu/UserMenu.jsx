
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";
// import { clearContacts } from "redux/contactSlice";
import { StyledLogoutBtn, StyledUserMenuUsername, StyledUserMenuWrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  // const contacts = useSelector(getContactsState)
  console.log("🚀 ~ file: UserMenu.jsx:8 ~ UserMenu ~ user:", user)

  const handleLogout = () => {
    dispatch(logout())
    // dispatch(clearContacts())
  }

  return (
    <StyledUserMenuWrapper>
      <StyledUserMenuUsername>Laskavo prosumo, {user.name}</StyledUserMenuUsername>
      <StyledLogoutBtn
        onClick={handleLogout}
        type="button"
        variant="outlined"
        color="secondary"
      >Logout</StyledLogoutBtn>
    </StyledUserMenuWrapper>
  );
};


