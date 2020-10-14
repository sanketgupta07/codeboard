import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { Card, Spinner } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked, BiBuildings, BiUser } from "react-icons/bi";
import { VscCircleFilled } from "react-icons/vsc";
import { FcCableRelease } from "react-icons/fc";
import { HiScale } from "react-icons/hi";

const GET_REPO = gql`
  query getRepo($login: String!, $name: String!) {
    repository(owner: $login, name: $name) {
      name
      url
      owner {
        login
        url
      }
      licenseInfo {
        name
      }
      releases(last: 1) {
        totalCount
        nodes {
          id
          tag {
            name
          }
          url
        }
      }
      forkCount
      description
      openGraphImageUrl
      isInOrganization
      stargazerCount
      languages(last: 3, orderBy: { field: SIZE, direction: ASC }) {
        totalCount
        nodes {
          id
          name
          color
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
  if (loading)
    return (
      <>
        <Spinner animation="grow" variant="light" size="sm" />
        <Spinner animation="grow" variant="light" size="sm" />
        <Spinner animation="grow" variant="light" size="sm" />
      </>
    );
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }
  // console.log(data);
  const repo = data.repository;
  return (
    <Card bg="Light" text="dark" border="info">
      <Card.Body>
        <Card.Title>
          <Card.Link href={repo.url} target="_blank">
            {repo.name}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle>
          <Card.Link href={repo.owner.url} target="_blank">
            <small className="text-muted">
              {repo.isInOrganization === true ? <BiBuildings /> : <BiUser />}{" "}
              {repo.owner.login}
            </small>
          </Card.Link>
          {repo.releases.totalCount > 0
            ? repo.releases.nodes.map((release) => (
                <Card.Link key={release.id} href={release.url} target="_blank">
                  <small className="text-muted">
                    <FcCableRelease />
                    {release.tag.name}
                  </small>
                </Card.Link>
              ))
            : ""}
          {repo.licenseInfo === null ? (
            ""
          ) : (
            <Card.Link>
              <small className="text-muted">
                <HiScale /> {repo.licenseInfo.name}
              </small>
            </Card.Link>
          )}
        </Card.Subtitle>
        <Card.Text>
          <small>{repo.description}</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link className="text-muted">
          <BiGitRepoForked />({repo.forkCount})
        </Card.Link>
        <Card.Link className="text-muted">
          <AiOutlineStar />({repo.stargazerCount})
        </Card.Link>
        {repo.languages.nodes.map((node) => (
          <Card.Link key={node.id} className="text-muted">
            <VscCircleFilled color={node.color} />
            {node.name}
          </Card.Link>
        ))}
      </Card.Footer>
    </Card>
  );
}
