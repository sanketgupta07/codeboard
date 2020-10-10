import gql from "graphql-tag";
import React from "react"
import { useQuery } from "react-apollo";
import { CardColumns } from "react-bootstrap";
import Repostory from "./repository"

const GET_REPOS_NAMES= gql`query getOrg($login: String!) {
    organization(login: $login) {
      repositories(first:10) {
      nodes{
        name
      }
      }
    }
  }`;
export default function RepositoryList(params) {
    const { loading, error, data } = useQuery(GET_REPOS_NAMES, {
        variables: {
          login: params.login,
        },
      });
      if(!params.load) return <> </>;
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    return(
        <CardColumns>
        {data.organization.repositories.nodes.map(node => {
            return (
                <>
                <Repostory name={node.name} login={params.login}/>
                </>
            );
        }
        
        )}
        </CardColumns>
    );
}