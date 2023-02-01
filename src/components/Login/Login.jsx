import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations-auth';
import { TextField, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from '../Login/Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
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
    <div>
      <h1 className={css.header}>Login</h1>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          color="warning"
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          color="warning"
        />
        <ThemeProvider theme={theme}>
          <Box textAlign="center" marginTop={10}>
            <Button variant="contained" type="submit" color="neutral">
              LogIn
            </Button>
          </Box>
        </ThemeProvider>
      </form>
    </div>
  );
};
export default Login;
