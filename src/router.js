import React, { createContext, useReducer, useState } from "react";
import { Route, Switch } from "react-router";
import AppFooter from "./footer";
import OrgPage from "./component/organization/orgpage";
import { Container, Row } from "react-bootstrap";
import RankNav from "./component/sidenav/ranknav";
import TopRepo from "./component/repository/toprepos";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login/login";
import AboutUs from "./component/about/aboutus";
import AppNav from "./component/nav/nav";
import { initialState, reducer } from "./component/oauth/store/oauthdata";

export const AuthContext = createContext();

function AppRouter(params) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [topReposUrl, setTopReposUrl] = useState();
  const rankNavClick = (query) => {
    const url = `https://api.github.com/${query}`;
    setTopReposUrl(url);
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <AppNav />
        </Switch>
        <Container fluid>
          <Switch>
            <Route path="/about" component={AboutUs} />
            <Route path="/toprepo">
              <Row>
                <RankNav onClick={rankNavClick} />
                <TopRepo url={topReposUrl} />
              </Row>
            </Route>
            <Route path="/toprepo"></Route>
            <Route path="/org" component={OrgPage} />
            <Route exact path="/" component={Home} />
          </Switch>
          <AppFooter />
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default AppRouter;
