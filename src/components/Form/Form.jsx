
import React, { useState } from "react";
import { StyledForm, StyledAddBtn } from "./Form.styled";

import { useDispatch, useSelector } from 'react-redux'

import { addContact } from "redux/contacts/operations";
import { selectContactsState } from "redux/contacts/contactSelectors";
import { toast } from "react-toastify";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";


const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()
  const contactsState = useSelector(selectContactsState)

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  const handlerSubmitForm = async (e) => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    }

    const isExist = contactsState.find(
      person => person.name.toLowerCase() === name.toLowerCase().trim()
    );

    if (isExist) {
      toast.error(`${name} is already in contacts.`)
      return;
    }

    dispatch(addContact(newContact))
    toast.success(`${name} was added to contacts.`)
    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <>
      <StyledForm onSubmit={handlerSubmitForm}>

        <FormControl
          sx={{ mb: 1 }}
          size="small"
        >
          <InputLabel htmlFor="input-contact-name" color="secondary">
            Name of contact
          </InputLabel>
          <OutlinedInput
            fullWidth
            color="secondary"
            sx={{
              color: "success",
            }}
            label='Name of contact'
            id="input-contact-name"
            name="name"
            type="text"
            onChange={onChangeInput}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormControl>

        <FormControl
          sx={{ mb: 1 }}
          size="small"

        >
          <InputLabel htmlFor="input-contact-number" color="secondary">
            Phone number
          </InputLabel>
          <OutlinedInput
            fullWidth
            color="secondary"
            label='Phone number'
            id="input-contact-number"
            name="number"
            type="tel"
            value={number}
            onChange={onChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormControl>

        <StyledAddBtn
          type="submit"
          variant="contained"
          color="secondary"
        >Add contact</StyledAddBtn>
      </StyledForm>
    </>

  )
}

export { ContactForm };

