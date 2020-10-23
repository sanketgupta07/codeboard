import React from "react";
import { Button, Jumbotron, Nav } from "react-bootstrap";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Home(params) {
  return (
    <Jumbotron fluid style={{ background: "none" }}>
      <h1>
        <RiDashboardFill /> Codeboard
      </h1>
      <p>An app developed using React, Go, GraphQL and Github Api</p>
      <Nav className="mr-auto">
        <Button as={Link} variant="warning" to="toprepo">
          Top Repo
        </Button>
        &nbsp;
        <Button as={Link} variant="warning" to="org">
          Organization
        </Button>
      </Nav>
    </Jumbotron>
  );
}
