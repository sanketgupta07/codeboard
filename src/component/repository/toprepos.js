import React, { useEffect, useState } from "react";
import { CardColumns, Col, Spinner } from "react-bootstrap";
import Repostory from "./repository";

export default function TopRepo(params) {
  const [appState, setAppState] = useState(false);
  const [data, setData] = useState({
    items: [],
    loading: false,
  });

  useEffect(() => {
    setAppState(true);
    const fetchData = async () => {
      const result = await fetch(params.url);
      const respData = await result.json();
      setData(respData);
      setAppState(false);
    };
    fetchData();
  }, [params.url]);
  if (appState)
    return (
      <>
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
      </>
    );
  return (
    <Col className="app-center" sm="10">
      <CardColumns>
        {data.items.map((node) => (
          <Repostory key={node.id} name={node.name} login={node.owner.login} />
        ))}
      </CardColumns>
    </Col>
  );
}
