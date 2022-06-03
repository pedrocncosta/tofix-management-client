import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to={`/user/${user._id}`}>
            <button>Profile</button>
          </Link>
          <button onClick={logoutUser}>Logout</button>
          <p>Hi {user.username}</p>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
