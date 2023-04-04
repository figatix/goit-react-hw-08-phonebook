import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './ModalWindow.styled';


export const ModalWindow = ({ children, onCloseModal }) => {
  return (
    <Modal
      open
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.wrap}>{children}</Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element,
  onCloseModal: PropTypes.func.isRequired,
};