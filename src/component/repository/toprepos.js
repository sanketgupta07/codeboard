import React, { useContext, useEffect, useState } from "react";
import { CardColumns, Col, Spinner } from "react-bootstrap";
import { AuthContext } from "../../router";
import Repostory from "./repository";

export default function TopRepo(params) {
  const { state } = useContext(AuthContext);
  const [appState, setAppState] = useState(false);
  const [data, setData] = useState({
    items: [],
    loading: false,
  });

  useEffect(() => {
    setAppState(true);
    const fetchData = async () => {
      const result = await fetch(params.url, {
        method: "get",
        headers: new Headers({
          Authorization: "token " + state.access_token,
        }),
      });
      const respData = await result.json();
      setData(respData);
      setAppState(false);
    };
    fetchData();
  }, [params.url, state.access_token]);
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
