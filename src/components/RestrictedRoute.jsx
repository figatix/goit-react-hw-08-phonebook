import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/authSelectors"

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  console.log("🚀 ~ file: RestrictedRoute.jsx:7 ~ RestrictedRoute ~ isLoggedIn:", isLoggedIn)


  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;

}