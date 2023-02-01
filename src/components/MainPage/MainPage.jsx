import FilterSearch from '../FilterSearch/FilterSearch';
import ContactsOfList from '../ContactsOfList/ContactsOfList';
import Contacts from '../Contacts/Contacts';
import css from '../MainPage/MainPage.module.css';

const MainPage = () => {
  return (
    <div className={css.main}>
      <Contacts />
      <FilterSearch />
      <ContactsOfList />
    </div>
  );
};
export default MainPage;
