import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="home">[ code ]</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="home">
            Home
          </Link>
          <Link className="nav-link" to="dashboard">
          Organization
          </Link>
          <Link className="nav-link" to="about">
            About Us
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}
