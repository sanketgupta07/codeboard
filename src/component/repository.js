import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
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
  const classes = useStyles();
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.repo.openGraphImageUrl}
          title={data.repo.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.repo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.repo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Star({data.repo.stargazerCount})
        </Button>
      </CardActions>
    </Card>
  );
}
