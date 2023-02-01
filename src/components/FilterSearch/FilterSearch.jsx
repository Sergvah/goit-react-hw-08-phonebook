import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilterSelector } from 'redux/selectors';
import { TextField } from '@mui/material';
import css from 'components/FilterSearch/Filtersearch.module.css';

const FilterSearch = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);
  const onChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <form className={css.find}>
      <label htmlFor="find" className={css.label}>
        Find contacts by name
      </label>
      <TextField
        type="text"
        value={filter}
        onChange={onChange}
        className={css.search}
        id="find"
        color="warning"
      />
    </form>
  );
};
export default FilterSearch;
