import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 320px;
  /* 
   */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  max-width: 700px;
  margin: 0 auto;
`;

export const StyledLoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledLoginBtn = styled.button`
  width: 100%;
  height: 32px;
  background-color: #9348b7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e1341e;
  }
`;