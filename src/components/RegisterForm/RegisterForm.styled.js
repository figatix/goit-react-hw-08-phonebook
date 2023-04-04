import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledRegisterForm = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  max-width: 700px;
  margin: 0 auto;
`;

export const StyledRegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const StyledRegisterBtn = styled(Button)`
  width: 100%;
`;

export const StyledRouterLink = styled(Link)`
  text-decoration: underline;
`;

export const styles = {
  routerLink: {
    textDecoration: 'underline',
    color: 'secondary.light',
  },
};
