import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { AuthContext } from "../../router";

export default function AppNav() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <RiDashboardFill />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} className="nav-link" to="toprepo">
            Top Most Repo
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="org">
            Organization
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="about">
            About Us
          </Nav.Link>
        </Nav>
        <Nav>
          {state.isLoggedIn ? (
            <Button variant="danger" onClick={() => handleLogout()}>
              Logout
            </Button>
          ) : (
            ""
          )}
        </Nav>
      </Navbar>
    </>
  );
}
