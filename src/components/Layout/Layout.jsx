import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors-auth';
import { Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from '../Layout/Layout.module.css';
import { clsx } from 'clsx';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.box}>
          <ThemeProvider theme={theme}>
            <Box textAlign="center" marginRight="10px">
              <Button
                variant="contained"
                type="submit"
                color="neutral"
                className={css.button}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? clsx(css.link, css.active) : css.link
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </Button>
            </Box>
          </ThemeProvider>
          {isLoggedIn && (
            <ThemeProvider theme={theme}>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  type="submit"
                  color="neutral"
                  className={css.button}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? clsx(css.link, css.active) : css.link
                    }
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </Button>
              </Box>
            </ThemeProvider>
          )}
        </div>
        {!isLoggedIn && (
          <div className={css.box}>
            <ThemeProvider theme={theme}>
              <Box textAlign="center" marginRight="10px">
                <Button
                  variant="contained"
                  type="submit"
                  color="neutral"
                  className={css.button}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? clsx(css.link, css.active) : css.link
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Button>
              </Box>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  type="submit"
                  color="neutral"
                  className={css.button}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? clsx(css.link, css.active) : css.link
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </Button>
              </Box>
            </ThemeProvider>
          </div>
        )}
        {isLoggedIn && <UserMenu />}
      </nav>
    </header>
  );
};
export default Layout;
