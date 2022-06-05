import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  const { isLoggedIn, user, establish, logoutUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">toFix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && (
              <>
                <Nav.Link href={`/user/${user._id}`}>Profile</Nav.Link>
                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                <Nav.Link href={`/categories/type`}>Establishments</Nav.Link>
                {/* <Nav.Link href={`/establishment/${establish._id}`}>
                  Establishments
                </Nav.Link> */}
              </>
            )}

            {!isLoggedIn && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
