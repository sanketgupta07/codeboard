import React from "react";
import { Jumbotron } from "react-bootstrap";
import { RiDashboardFill } from "react-icons/ri";

export default function Home(params) {
  return (
    <Jumbotron fluid style={{ background: "none" }}>
      <h1>
        <RiDashboardFill /> Codeboard
      </h1>
      <p>An app developed using React, Go, GraphQL and Github Api</p>
    </Jumbotron>
  );
}
