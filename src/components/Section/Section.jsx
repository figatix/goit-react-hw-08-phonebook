import { Box, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './Section.styled';


export const Section = ({ title, children }) => {
  return (
    <Box component="section" sx={styles.section}>
      <Container>
        {title && (
          <Typography component="h2" variant="h2" sx={styles.title}>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};