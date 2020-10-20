import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { Button, Card, Spinner } from "react-bootstrap";
import { RiErrorWarningLine } from "react-icons/ri";

const GET_USER = gql`
  query getOrg($login: String!) {
    organization(login: $login) {
      name
      description
      avatarUrl
      repositories {
        totalCount
      }
    }
  }
`;
export default function Organization(params) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: params.login },
  });
  if (params.login === "") return <></>;
  // console.log(error);
  if (loading) return <Spinner animation="grow" variant="light" size="sm" />;
  if (error)
    return (
      <>
        <RiErrorWarningLine style={{ color: "red" }} />
        &nbsp; Oops..an Error &nbsp;
        {error}
      </>
    );
  // console.log(data);
  return (
    <Card bg="dark" text="white" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.organization.avatarUrl} />
      <Card.Body>
        <Card.Title>{data.organization.name} </Card.Title>
        <Card.Text>{data.organization.description} </Card.Text>
      </Card.Body>
      <Button onClick={params.repos}>
        Repos({data.organization.repositories.totalCount})
      </Button>
    </Card>
  );
}
