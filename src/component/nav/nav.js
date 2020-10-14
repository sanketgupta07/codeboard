import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BiChalkboard } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function AppNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <BiChalkboard />
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
