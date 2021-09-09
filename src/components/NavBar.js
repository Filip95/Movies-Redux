import { Link } from "react-router-dom";
import MoviesSearch from "./MoviesSearch";
import { useDispatch,useSelector } from "react-redux";
import {logout,selectActiveUser,selectIsAuthenticated,} from "../store/activeUser";

export default function NavBar() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const activeUser = useSelector(selectActiveUser);

  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(logout());
  }



  return (
    <div>
      <MoviesSearch />
      <nav>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </nav>
    </div>
  );
}
