import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect className="myNav" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          toFix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && (
              <>
                <Nav.Link eventKey="0" as={Link} to={`/user/${user._id}`}>
                  Profile
                </Nav.Link>
                <Nav.Link eventKey="1" as={Link} to={`/categories/type`}>
                  Establishments
                </Nav.Link>
                <Nav.Link eventKey="2" as={Link} to={`/categories`}>
                  Categories
                </Nav.Link>
                <Nav.Link eventKey="3" onClick={logoutUser}>
                  <b>Logout</b>
                </Nav.Link>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Nav.Link eventKey="4" as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
