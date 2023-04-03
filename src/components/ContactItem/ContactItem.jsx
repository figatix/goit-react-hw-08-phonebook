import PropTypes from "prop-types";
import React from "react";
import { StyledAddBtn, StyledContactItem } from "./ContactItem.styled";
import { useDispatch } from 'react-redux'
import { deleteContact } from "redux/contacts/operations";

// import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';


const ContactItem = ({ personName, personNumber, id }) => {
  const dispatch = useDispatch()

  return (
    <StyledContactItem>
      {personName}: {personNumber}
      <StyledAddBtn

        onClick={() => dispatch(deleteContact(id))}
        type="button"
        variant="outlined"
        color="error"
      >Delete</StyledAddBtn>
    </StyledContactItem>
  )
}

export { ContactItem };


ContactItem.propTypes = {
  personName: PropTypes.string.isRequired,
  personNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}