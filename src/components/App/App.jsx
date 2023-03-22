
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/contactSlice";
import { fetchContacts } from "redux/operations";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactForm } from "../Form/Form";

import { StyledMainTitle, StyledTitle, Wrapper } from "./App.styled";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
    <Wrapper>
      <StyledMainTitle>Phonebook</StyledMainTitle>
      <ContactForm />
      <StyledTitle>Contact List</StyledTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Wrapper>
  )
};

export { App };

