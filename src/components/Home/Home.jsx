import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from '../Home/Home.module.css';

const Home = () => {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#ee5e2a',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <div className={css.form}>
        <p>Create new account</p>
        <ThemeProvider theme={theme}>
          <Box textAlign="center">
            <Button variant="contained" type="submit" color="neutral">
              <Link to="/register" className={css.link}>
                Register
              </Link>
            </Button>
          </Box>
        </ThemeProvider>
        <p>Log in to your account</p>
        <ThemeProvider theme={theme}>
          <Box textAlign="center">
            <Button variant="contained" type="submit" color="neutral">
              <Link to="/login" className={css.link}>
                Log in
              </Link>
            </Button>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
};
export default Home;
