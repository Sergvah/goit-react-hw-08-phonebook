import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoadingSelector } from 'redux/selectors';
import { Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from 'components/ContactItem/Сontactitem.module.css';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDeleteCard = id => dispatch(deleteContact(id));
  const isLoading = useSelector(getIsLoadingSelector);

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
    <li className={css.item}>
      <p className={css.text}>{item.name}:</p>
      <p className={css.numb}>{item.number}</p>
      <ThemeProvider theme={theme}>
        <Box textAlign="center">
          <Button
            variant="contained"
            type="button"
            onClick={() => onDeleteCard(item.id)}
            disabled={isLoading}
            color="neutral"
            className={css.btn}
          >
            Delete
          </Button>
        </Box>
      </ThemeProvider>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
