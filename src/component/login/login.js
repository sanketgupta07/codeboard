import React, { useState, useEffect, useContext } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../router";

export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        client_id: state.client_id,
        redirect_uri: state.redirect_uri,
        code: newUrl[1],
      };

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(process.env.REACT_APP_GO_API, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { access_token: data.access_token, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Login failed!",
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Jumbotron style={{ background: "none" }}>
      <h1>
        <RiDashboardFill /> Codeboard
      </h1>
      <p>An app developed using React, Go, GraphQL and Github Api</p>
      <p>
        <Button
          variant="success"
          onClick={() => {
            setData({ ...data, errorMessage: "", isLoading: true });
          }}
          href={`https://github.com/login/oauth/authorize?scope=user%20read:org&client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          {data.isLoading ? (
            "Loading..."
          ) : (
            <>
              <AiOutlineGithub /> Sign in with Github
            </>
          )}
        </Button>
      </p>
      <span>
        {data.errorMessage?}
      </span>
    </Jumbotron>
  );
}
