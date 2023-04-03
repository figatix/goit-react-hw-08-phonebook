import styled from 'styled-components';

import { TextField } from '@mui/material';

const StyledFilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  :hover input {
    border: 1px solid #9348b7;
  }
`;
const StyledFilterInputTitle = styled.span`
  font-style: italic;
  font-size: 20px;
  margin-bottom: 8px;
  text-align: center;
`;

const StyledFilterInput = styled.input`
  height: 32px;
  width: 300px;
  padding: 4px 16px;
  font-style: italic;
  font-weight: 700;
  color: #9348b7;
  border-radius: 5px;
  border: 1px solid #6cb748;
  transition: border 250ms ease-in-out;
`;

export { StyledFilterLabel, StyledFilterInputTitle, StyledFilterInput };

// ??????

export const StyledFilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Field = styled(TextField)`
  width: 300px;
  font-style: italic;

  & label {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 8px;
  }

  & input {
    margin-left: 8px;
  }
`;
