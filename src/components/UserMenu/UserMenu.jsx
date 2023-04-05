
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";
import { StyledLogoutBtn, StyledUserMenuUsername, StyledUserMenuWrapper } from "./UserMenu.styled";
import { toast } from "react-toastify";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      toast.success(`You've Successfully logged out!`);
    } catch (error) {
      toast.error(`Oops! Something went wrong... ${error}`);
    }
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


