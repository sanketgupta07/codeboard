import React, { useEffect, useState } from "react";
import { Card, Form, ListGroup } from "react-bootstrap";

export default function RankNav(params) {
  const [navState, setNavState] = useState({
    filter: "forks",
    language: null,
  });
  useEffect(() => {
    const query =
      navState.language !== null &&
      navState.language !== "" &&
      navState.language !== "null"
        ? `language:${navState.language}&${navState.filter}:>0&sort=${navState.filter}&per_page=10`
        : `${navState.filter}:>0&sort=${navState.filter}&per_page=10`;
    params.onClick(query);
  });
  const languages = [
    "Html",
    "Java",
    "JavaScript",
    "Go",
    "Python",
    "Shell",
    "CSS",
    "Ruby",
    "Perl",
    "R",
    "Rust",
    "Scala",
    "TypeScript",
    "C",
  ];
  return (
    <Card bg="light" text="dark">
      <Card.Header>
        <Form>
          <Form.Group>
            <Form.Label>Top 10 Most</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              onChange={(event) =>
                setNavState({ ...navState, filter: event.target.value })
              }
            >
              <option defaultValue value="forks">
                Forks
              </option>
              <option value="stars">Stars</option>
              <option value="watchers">Watchers</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Card.Header>
      <Card.Footer>Language Filter</Card.Footer>
      <ListGroup variant="flush">
        {languages.map((lang) => (
          <ListGroup.Item key={Math.random()} variant="light">
            <Card.Link
              as="a"
              onClick={() =>
                setNavState({ ...navState, language: lang.toLowerCase() })
              }
              href="#"
            >
              {lang}
            </Card.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
