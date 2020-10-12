import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { CardColumns } from "react-bootstrap";
import Repostory from "./repository";

const GET_REPOS_NAMES = gql`
  query getOrg($login: String!) {
    organization(login: $login) {
      repositories(last: 12, orderBy: { field: STARGAZERS, direction: ASC }) {
        nodes {
          id
          name
        }
      }
    }
  }
`;
export default function RepositoryList(params) {
  const { loading, error, data } = useQuery(GET_REPOS_NAMES, {
    variables: {
      login: params.login,
    },
  });
  if (!params.load) return <> </>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <CardColumns>
      {data.organization.repositories.nodes.map((node) => {
        return (
          <Repostory key={node.id} name={node.name} login={params.login} />
        );
      })}
    </CardColumns>
  );
}
