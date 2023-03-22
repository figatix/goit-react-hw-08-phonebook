import PropTypes from "prop-types";
import React from "react";

import { StyledAddBtn, StyledContactItem } from "./ContactItem.styled";
import { useDispatch } from 'react-redux'

import { deleteContact } from "redux/operations";

const ContactItem = ({ personName, personNumber, id }) => {
  const dispatch = useDispatch()

  return (
    <StyledContactItem>
      {personName}: {personNumber}
      <StyledAddBtn

        onClick={() => dispatch(deleteContact(id))}
        type="button">Delete</StyledAddBtn>
    </StyledContactItem>
  )
}

export { ContactItem };


ContactItem.propTypes = {
  personName: PropTypes.string.isRequired,
  personNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}