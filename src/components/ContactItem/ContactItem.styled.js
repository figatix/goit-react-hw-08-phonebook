import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledContactItem = styled.li`
  display: inline-flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: #ba1972;

  :nth-child(even) {
    color: #2225dd;
  }

  /* :hover {
    background-color: rgb(249 168 214 / 57%);
  } */
`;

const StyledAddBtn = styled(Button)`
  font-size: 16px;
  height: 24px;
  padding: 0 12px;
  margin-left: 12px;
  border-radius: 10px;
  background-color: #9348b7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e1341e;
  }
`;

export { StyledContactItem, StyledAddBtn };

export const styles = {
  item: {
    padding: '10px',
    bgcolor: 'primary.50',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContentWrap: { display: 'flex', gap: '10px', alignItems: 'center' },
  btnList: { display: 'flex', gap: '5px', alignItems: 'center' },
};