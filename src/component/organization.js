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
const GET_USER = gql`
  query getOrg($login: String!) {
    org: organization(login: $login) {
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
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: params.login },
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
          image={data.org.avatarUrl}
          title={data.org.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.org.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.org.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Repositories({data.org.repositories.totalCount})
        </Button>
      </CardActions>
    </Card>
  );
}
