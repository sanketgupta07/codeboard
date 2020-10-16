import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

export default function AppNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/codeboard">
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
      </Navbar>
    </>
  );
}
