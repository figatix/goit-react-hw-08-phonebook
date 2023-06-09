import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledUserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledUserMenuUsername = styled.div`
  font-weight: 700;
  color: #2a363b;
`;

export const StyledLogoutBtn = styled(Button)`
  height: 32px;
  background-color: #9348b7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e1341e;
  }
`;
