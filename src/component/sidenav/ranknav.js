import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Form } from "react-bootstrap";

export default function RankNav(params) {
  const [navState, setNavState] = useState({
    filter: "forks",
    language: null,
    number: 10,
  });
  useEffect(() => {
    const query =
      navState.language !== null &&
      navState.language !== "" &&
      navState.language !== "null"
        ? `search/repositories?q=language:${navState.language}&${navState.filter}:>0&sort=${navState.filter}&per_page=${navState.number}`
        : `search/repositories?q=${navState.filter}:>0&sort=${navState.filter}&per_page=${navState.number}`;
    params.onClick(query);
  });
  const numbers = [10, 20, 30, 40, 50, 100];
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
    <>
      <Col className="app-left" sm="2">
        <Card bg="light" text="dark">
          <Form>
            <Card.Header>
              <Form.Group>
                <Form.Label>Top </Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                  custom
                  onChange={(event) =>
                    setNavState({ ...navState, number: event.target.value })
                  }
                >
                  {/* <option defaultValue value="10">
                    10
                  </option> */}
                  {numbers.map((num, index) => {
                    return (
                      <option
                        defaultValue={num === 10 ? true : false}
                        key={index}
                        value={num}
                        label={num}
                      />
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Most</Form.Label>
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
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Language Filter</Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                  custom
                  onChange={(event) =>
                    setNavState({
                      ...navState,
                      language: event.target.value.toLowerCase(),
                    })
                  }
                >
                  <option value="" label="Select" />
                  {languages.map((lang, index) => {
                    return (
                      <option
                        key={index}
                        value={lang.toLowerCase()}
                        label={lang}
                      />
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Card.Header>
          </Form>
        </Card>
        &nbsp;
        <Card bg="light" text="dark">
          <Card.Header>
            Fetched data details
            <Badge variant="light">Top {navState.number}</Badge>&nbsp;
            <Badge variant="secondary">Most {navState.filter} Repos</Badge>
            &nbsp;
            <Badge variant="primary">{navState.language}</Badge>
          </Card.Header>
        </Card>
      </Col>
    </>
  );
}
