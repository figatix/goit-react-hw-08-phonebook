
import { Route, Routes } from "react-router-dom";

import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";

import { Layout } from "components/Layout";
import { refreshUser } from "redux/auth/authOperations";
import { selectIsLoggedIn } from "redux/auth/authSelectors";


const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const HomePage = lazy(() => import('../../pages/Home'));
const Phonebook = lazy(() => import('../../pages/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    dispatch(refreshUser())

    if (isLoggedIn) {
      dispatch(fetchContacts())
    }
  }, [dispatch, isLoggedIn])


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/phonebook" element={<Phonebook />} />
          <Route />
        </Route>
      </Routes>
    </>
  )
};

export { App };

