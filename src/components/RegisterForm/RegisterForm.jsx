import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations-auth';
import css from '../RegisterForm/RegisterForm.module.css';
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name: name, email: email, password: password }));
    setName('');
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
      <h1 className={css.header}>Register Page</h1>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id="outlined-basic"
          label="Name"
          variant="standard"
          color="warning"
        />
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id="outlined-basic"
          label="Email"
          variant="standard"
          color="warning"
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          id="outlined-basic"
          label="Password"
          variant="standard"
          color="warning"
        />
        <ThemeProvider theme={theme}>
          <Box textAlign="center" marginTop={10}>
            <Button variant="contained" type="submit" color="neutral">
              Register
            </Button>
          </Box>
        </ThemeProvider>
      </form>
    </div>
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>Username</label>
    //   <input type="text" name="name" onChange={handleChange} />
    //   <label className={css.label}>Email</label>
    //   <input type="email" name="email" onChange={handleChange} />
    //   <label className={css.label}>Password</label>
    //   <input type="password" name="password" onChange={handleChange} />
    //   <button type="submit" className={css.btn}>
    //     Register
    //   </button>
    // </form>
  );
};
export default RegisterForm;
