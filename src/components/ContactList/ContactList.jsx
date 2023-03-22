
import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { StyledContactList } from "./ContactList.styled";
import { useSelector } from 'react-redux'

import { getFilterState } from "redux/filterSlice";
import { getContactsState } from "redux/contactSlice";

const ContactList = () => {
  const filterState = useSelector(getFilterState)
  const contactsState = useSelector(getContactsState)

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

