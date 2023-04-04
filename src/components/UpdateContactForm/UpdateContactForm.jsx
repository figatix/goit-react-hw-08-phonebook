
import React, { useEffect, useState } from "react";
import { StyledForm, styles } from "./UpdateContactForm.styled";

import { useDispatch, useSelector } from 'react-redux'

import { updateContact } from "redux/contacts/operations";
import { selectContactsState } from "redux/contacts/contactSelectors";
import { toast } from "react-toastify";
import { Box, Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";


export const UpdateContactForm = ({ id, onCloseModal }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()
  const contactsState = useSelector(selectContactsState)

  useEffect(() => {
    const { name, number } = contactsState.find(el => el.id === id)
    setName(name)
    setNumber(number)
  }, [contactsState, id])


  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    const updatedContact = {
      name,
      number,
      id,
    }

    const isExistName = contactsState.find(
      person => person.name.toLowerCase() === name.toLowerCase().trim()
    );
    const isExistNumber = contactsState.find(
      person => person.number === number
    );

    if (isExistName && isExistNumber) {
      toast.error(`${name} is already in contacts.`)
      return;
    }

    dispatch(updateContact(updatedContact))
    toast.success(`${name} was updated.`)
    reset()
    onCloseModal()
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


        <Box sx={styles.btnBox}>
          <Button type="submit" variant="contained" color="secondary">
            Update Contact
          </Button>
          <Button type="button" variant="outlined" color="secondary" onClick={() => onCloseModal()}>
            Cancel
          </Button>
        </Box>

      </StyledForm>
    </>

  )
}

