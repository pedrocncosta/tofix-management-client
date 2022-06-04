import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button } from "reactstrap";
import loginLogo from "../assets/pngwing.com.png";
import homeLogo from "../assets/home-icon.png";


function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="myNav">
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
    </nav>
  );
}

export default Navbar;
