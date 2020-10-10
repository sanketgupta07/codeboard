import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { Card } from "react-bootstrap";

const GET_REPO = gql`
  query getRepo($login: String!, $name: String!) {
    repository(owner: $login, name: $name) {
      name
      owner {
        login
      }
      forkCount
      description
      openGraphImageUrl
      isInOrganization
      stargazerCount
      languages(last: 3, orderBy: { field: SIZE, direction: ASC }) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;
export default function Repostory(params) {
  const { loading, error, data } = useQuery(GET_REPO, {
    variables: {
      login: params.login,
      name: params.name,
    },
  });
  console.log(error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // console.log(data);
  const repo= data.repository;
  return (
   <Card bg="dark" text="white" style={{ width: "18rem" }}>
<Card.Body>
  <Card.Title>{repo.name}</Card.Title>
  <Card.Text>
    {repo.description}
  </Card.Text>
  <Card.Text>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Text>
</Card.Body>
</Card>
  );
}
