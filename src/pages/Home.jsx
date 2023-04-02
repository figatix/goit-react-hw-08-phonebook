import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <Box style={styles.container}>
      <Typography variant="h1" style={styles.title}>
        Phonebook welcome page{' '}
        <Box component="span" role="img" aria-label="Greeting icon">
          💁‍♀️
        </Box>
      </Typography>
    </Box>
  );
}
