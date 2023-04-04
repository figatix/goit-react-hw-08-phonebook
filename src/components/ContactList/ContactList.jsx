
import React, { useEffect } from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { StyledContactList } from "./ContactList.styled";
import { useDispatch, useSelector } from 'react-redux'
import { selectContactsState, selectFilterState } from "redux/contacts/contactSelectors";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoggedIn } from "redux/auth/authSelectors";



const ContactList = () => {
  const filterState = useSelector(selectFilterState)
  const contactsState = useSelector(selectContactsState)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts())
    }
  }, [dispatch, isLoggedIn])

  const handlerFilterContacts = () => {
    const normalizeName = filterState?.toLowerCase().trim()
    const isContacts = (contactsState.length !== 0);
    return isContacts && contactsState.filter(person => person.name?.toLowerCase().includes(normalizeName))
  }

  const filteredContacts = handlerFilterContacts();

  return (
    <StyledContactList>
      {filteredContacts &&
        filteredContacts.map(({ name, id, number }) => {
          return <ContactItem
            personName={name}
            personNumber={number}
            key={id}
            id={id}
          />
        })}
    </StyledContactList>
  )
}

export { ContactList };

