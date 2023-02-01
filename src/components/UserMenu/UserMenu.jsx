import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors-auth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations-auth';
import { Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleSubmit = () => {
    dispatch(logOut());
  };
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
      <div className={css.box}>
        <p className={css.text}>
          Welcome,<span className={css.span}>{user.name}</span>!
        </p>
        <ThemeProvider theme={theme}>
          <Box textAlign="center">
            <Button
              variant="contained"
              type="button"
              onClick={handleSubmit}
              color="neutral"
              className={css.button}
            >
              Log out
            </Button>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
};
export default UserMenu;
