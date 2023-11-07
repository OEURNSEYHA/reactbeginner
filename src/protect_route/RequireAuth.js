import { useAuth } from "./auth";
import { Navigate, useLocation} from "react-router-dom";

export default function RequireAuth({ children }) {
  const auth = useAuth();
   const location = useLocation()

  if ( !auth) {
   return <Navigate to={'/login'} state={{path: location.pathname}}/>
  }
  return children;
}
