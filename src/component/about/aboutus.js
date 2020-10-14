import React from "react";
import { Card, Jumbotron } from "react-bootstrap";
import { FaBug } from "react-icons/fa";

export default function AboutUs(params) {
  return (
    <Jumbotron fluid style={{ background: "none" }}>
      <h3>Thanks for visiting codeboard</h3>
      <p>
        <FaBug />
        &nbsp;
        <Card.Link
          href="https://github.com/sanketgupta07/codeboard/issues/new"
          target="_blank"
        >
          To Report a bug/issue{" "}
        </Card.Link>
      </p>
    </Jumbotron>
  );
}
