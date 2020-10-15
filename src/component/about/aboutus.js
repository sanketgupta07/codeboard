import React from "react";
import { Card, Jumbotron } from "react-bootstrap";
import { RiBugFill } from "react-icons/ri";

export default function AboutUs(params) {
  return (
    <Jumbotron fluid style={{ background: "none" }}>
      <h3>Thanks for visiting codeboard</h3>
      <p>
        <RiBugFill />
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
