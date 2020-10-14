import React from "react";
import { Jumbotron } from "react-bootstrap";
import { BiChalkboard } from "react-icons/bi";

export default function Home(params) {
  return (
    <Jumbotron fluid style={{ background: "none" }}>
      <h1>
        <BiChalkboard /> Codeboard
      </h1>
      <p>An app developed using React, GraphQL and Github Api</p>
    </Jumbotron>
  );
}
