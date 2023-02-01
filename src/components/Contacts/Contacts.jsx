import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { TextField, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from 'components/Contacts/contacts.module.css';
import Notiflix from 'notiflix';
import { getContactsSelector, getIsLoadingSelector } from 'redux/selectors';

const Contacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    console.log('dddd');
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  // console.log(contacts);
  const isLoading = useSelector(getIsLoadingSelector);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const isAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    const contactInfo = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    // console.log(contactInfo);
    dispatch(addContact(contactInfo));
    form.reset();
    reset();
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
      <h1 className={css.header}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <TextField
          type="text"
          label="Name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          id="name"
          color="warning"
          variant="standard"
        />
        <TextField
          type="tel"
          label="Number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNameChange}
          id="number"
          color="warning"
          variant="standard"
        />
        <ThemeProvider theme={theme}>
          <Box textAlign="center" marginTop={10}>
            <Button
              variant="contained"
              type="submit"
              color="neutral"
              disabled={isLoading}
              className={css.btn}
            >
              Add Contact
            </Button>
          </Box>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default Contacts;
