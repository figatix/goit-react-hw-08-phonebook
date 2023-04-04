

import styled from 'styled-components'
import { useSelector } from "react-redux";
import { ContactForm } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { selectError, selectIsLoading } from 'redux/contacts/contactSelectors';
import { CircularProgress } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 30px 0;
  max-width:700px;
  margin: 0 auto;
`;

const StyledMainTitle = styled.h1`
  font-size: 32px;
  color: #E1341E;
  margin-bottom: 16px;
`;
const StyledTitle = styled.h2`
  font-size: 24px;
  color: #9348B7;
  margin-bottom: 12px;
`;

export default function Phonebook() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <StyledMainTitle>Create a contact</StyledMainTitle>
      <ContactForm />
      <StyledTitle>Contact List</StyledTitle>
      <Filter />
      {isLoading && !error &&
        <CircularProgress color="secondary" />
      }
      <ContactList />
    </Wrapper>
  )
};



