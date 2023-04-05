
import { Route, Routes } from "react-router-dom";

import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Layout } from "components/Layout";
import { refreshUser } from "redux/auth/authOperations";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/authSelectors";

import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";
import { toast } from "react-toastify";


const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const HomePage = lazy(() => import('../../pages/Home'));
const Phonebook = lazy(() => import('../../pages/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (isLoggedIn || !token) return

    const refresh = async () => {
      try {
        await dispatch(refreshUser()).unwrap();
        toast.success(`User refresh`)
      } catch (error) {
        toast.error(`Something went wrong... ${error}`)
      }
    }

    refresh()
    // dispatch(refreshUser())
  }, [dispatch, isLoggedIn])


  /*
  !   В RestrictedRoute і PrivateRoute:
  ?   component={LoginPage} - це просто пропс, в який ми передаємо посилання на Компонент. Можемо використовувати будь-яку назву.
  * return isLoggedIn ? <Element /> : <Navigate to={redirectTo} />
  ? ТАКОЖ, можна кидати так  component={<LoginPage/>} . Тоді в самих компонентах треба правильно рендирити: 
  * return isLoggedIn ? <Navigate to={redirectTo} /> : component;
  */

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute
              component={RegisterPage}
            />}
          />
          <Route path="/login" element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={LoginPage}
            />}
          />

          <Route path="/phonebook" element={
            <PrivateRoute
              redirectTo="/login"
              component={Phonebook}
            />}
          />

          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    )

  )
};

export { App };

