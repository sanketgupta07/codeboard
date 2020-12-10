import React, { useContext } from "react";
import { Card, Jumbotron } from "react-bootstrap";
import { RiBugFill, RiTwitterFill } from "react-icons/ri";
import { Redirect } from "react-router";
import { AuthContext } from "../../router";

export default function AboutUs(params) {
  const { state } = useContext(AuthContext);
  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <Jumbotron fluid style={{ background: "none" }}>
      <h3>
        Thanks for visiting codeboard. This app is only built for learning
        purpose.
      </h3>
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
      <p>
        You may contact or follow me on twitter <RiTwitterFill />
        &nbsp;
        <Card.Link href="https://twitter.com/sanketgupta007" target="_blank">
          @sanketgupta007{" "}
        </Card.Link>
      </p>
    </Jumbotron>
  );
}
