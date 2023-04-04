import PropTypes from "prop-types";
import React, { useState } from "react";
import { StyledDeleteBtn, StyledContactItem } from "./ContactItem.styled";
import { useDispatch } from 'react-redux'
import { deleteContact } from "redux/contacts/operations";
import { Box } from "@mui/material";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { UpdateContactForm } from "components/UpdateContactForm/UpdateContactForm";


const ContactItem = ({ personName, personNumber, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleModalShow = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <StyledContactItem>
        {personName}: {personNumber}

        <Box>
          <StyledDeleteBtn
            onClick={handleModalShow}
            type="button"
            variant="outlined"
            color="error"
          >edit</StyledDeleteBtn>

          <StyledDeleteBtn
            onClick={() => dispatch(deleteContact(id))}
            type="button"
            variant="outlined"
            color="error"
          >Delete</StyledDeleteBtn>
        </Box>
      </StyledContactItem>
      {isModalOpen &&
        <ModalWindow onCloseModal={handleModalShow}>
          <UpdateContactForm onCloseModal={handleModalShow} id={id} />
        </ModalWindow>
      }
    </>
  )
}

export { ContactItem };


ContactItem.propTypes = {
  personName: PropTypes.string.isRequired,
  personNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}