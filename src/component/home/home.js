import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function Home(params) {
  return (
    <Card bg="light" text="dark" border="info">
      <Card.Header>Top 10</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item variant="light">Forked</ListGroup.Item>
        <ListGroup.Item variant="light">Star</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
