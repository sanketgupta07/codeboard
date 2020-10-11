import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { Card } from "react-bootstrap";
import {AiOutlineStar} from "react-icons/ai" 
import {BiGitRepoForked} from "react-icons/bi"

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
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
    }
  // console.log(data);
  const repo= data.repository;
  return (
   <Card bg="Light" text="dark" border="info">
<Card.Body>
  <Card.Title>{repo.name}</Card.Title>
  <Card.Subtitle>{repo.owner.login}</Card.Subtitle>
  <Card.Text>
    <small className="text-muted">{repo.description}</small>
  </Card.Text>
  <Card.Link><BiGitRepoForked/>({repo.forkCount})</Card.Link>
  <Card.Link><AiOutlineStar/>({repo.stargazerCount})</Card.Link>
</Card.Body>
</Card>
  );
}
