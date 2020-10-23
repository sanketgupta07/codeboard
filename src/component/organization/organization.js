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
  const { loading, errors, data } = useQuery(GET_USER, {
    variables: { login: params.login },
  });
  if (params.login === "") return <></>;
  // console.log(error);
  if (loading) return <Spinner animation="grow" variant="light" size="sm" />;
  if (errors) {
    return (
      <>
        <RiErrorWarningLine style={{ color: "red" }} />
        &nbsp; Oops..an Error &nbsp;
        {errors}
      </>
    );
  } else if (data === undefined) {
    return (
      <>
        <RiErrorWarningLine style={{ color: "red" }} />
        &nbsp; Organization "{params.login}" not found &nbsp;
      </>
    );
  }

  // console.log(data);
  return (
    <Card bg="dark" text="white">
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
