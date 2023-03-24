import styled from 'styled-components';

export const StyledUserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledUserMenuUsername = styled.div`
  font-weight: 700;
`;

export const StyledLogoutBtn = styled.button`
  width: 100%;
  height: 32px;
  background-color: #9348b7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e1341e;
  }
`;
