import { StyledUserMenuUsername, StyledUserMenuWrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  return (
    <StyledUserMenuWrapper>
      <StyledUserMenuUsername>mango@mail.com</StyledUserMenuUsername>
      <button type="button">Logout</button>
    </StyledUserMenuWrapper>
  );
};


