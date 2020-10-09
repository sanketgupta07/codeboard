import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";

const GET_REPO = gql`
  query getRepo($login: String!, $name: String!) {
    repo: repository(owner: $login, name: $name) {
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
  return (
    <>
          {data.repo.openGraphImageUrl}
          {data.repo.name}
        </>
  );
}
