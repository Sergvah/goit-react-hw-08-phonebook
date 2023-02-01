// import Contacts from './Contacts/Contacts';
// import FilterSearch from './FilterSearch/FilterSearch';
// import ContactsOfList from './ContactsOfList/ContactsOfList';
// import { getIsLoadingSelector } from 'redux/selectors';
import RegisterForm from './RegisterForm/RegisterForm';
import Login from './Login/Login';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import MainPage from './MainPage/MainPage';
// import RegisterPage from 'first';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations-auth';
import { selectIsRefreshing } from 'redux/auth/selectors-auth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    // <div className="container">
    //   <h1>Phonebook</h1>
    //   <Contacts />
    //   <h2>Contacts</h2>
    //   <FilterSearch />
    //   {isLoading}
    //   <ContactsOfList />
    //   <RegisterForm />
    //   <Login />
    // </div>

    isRefreshing ? (
      'Fetching user data ...'
    ) : (
      <div className="container">
        <Layout />
        <Routes>
          <Route
            path="/"
            index
            element={<RestrictedRoute component={Home} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={MainPage} redirectTo="/" />}
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterForm}
                redirectTo="/contacts"
              />
            }
          />
        </Routes>
      </div>
    )
  );
};
