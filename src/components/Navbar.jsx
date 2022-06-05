import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button } from "react-bootstrap";

function Navbar(props) {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="myNav">
      <Link to="/">toFix</Link>

      {isLoggedIn && (
        <>
          <Link to={`/user/${user._id}`}>
            <Button variant="warning">Profile</Button>
          </Link>
          <Button variant="warning" onClick={logoutUser}>
            Logout
          </Button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

/*  <nav className="myNav">
      <Link to="/">
        <img src={homeLogo} alt="homeLogo" />
      </Link>

      {isLoggedIn && (
        <>
          <Link to={`/user/${user._id}`}>
            <Button color="BurlyWood">Profile</Button>
          </Link>
          <Button color="BurlyWood" onClick={logoutUser}>
            Logout
          </Button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">
            <img src={loginLogo} alt="loginIcon" />
          </Link>
        </>
      )}
    </nav> */

export default Navbar;
