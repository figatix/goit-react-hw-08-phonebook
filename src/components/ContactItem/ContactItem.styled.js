import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledContactItem = styled.li`
  display: inline-flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: #ba1972;
  padding: 8px;
  border: solid 1px #6cb748;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #6cb748;

  :nth-child(even) {
    color: #2225dd;
  }
`;

const StyledDeleteBtn = styled(Button)`
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

export { StyledContactItem, StyledDeleteBtn };

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
