import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsSelector, getFilterSelector } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import css from 'components/ContactsOfList/Сontactsoflist.module.css';

const ContactsOfList = () => {
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);
  const filterLowCase = filter.toLowerCase();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLowCase)
  );
  return visibleContacts.length === 0 && contacts.length !== 0 ? (
    <h2 className={css.text}>Sorry, contact not found</h2>
  ) : (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};

export default ContactsOfList;
