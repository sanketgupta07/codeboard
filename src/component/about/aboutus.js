import React from "react";
import { Card, Container } from "react-bootstrap";
import {FaBug} from "react-icons/fa"

export default function AboutUs(params) {
  return <header className="App-header">
    <Container>
    <Card bg="dark" text="white" >
      <Card.Header>
    Thanks
    </Card.Header>
    <Card.Body>
     <Card.Link href="https://github.com/sanketgupta07/codeboard/issues/new"  target="_blank"> <FaBug/> To Report a bug/issue  </Card.Link>
    </Card.Body>
    </Card>
    </Container>
    </header>;
}
