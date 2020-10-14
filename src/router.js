import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router";
import AboutUs from "./component/about/aboutus";
import AppNav from "./component/nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppFooter from "./footer";
import OrgPage from "./component/organization/orgpage";
import { Col, Container, Row } from "react-bootstrap";
import RankNav from "./component/sidenav/ranknav";
import TopRepo from "./component/repository/toprepos";
import { BrowserRouter } from "react-router-dom";

function AppRouter(params) {
  const browserHistory = createBrowserHistory();
  const [topReposUrl, setTopReposUrl] = useState();
  const rankNavClick = (query) => {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    setTopReposUrl(url);
  };
  return (
    <>
      <BrowserRouter history={browserHistory}>
        <AppNav />
        <Container fluid>
          <Row>
            <Col className="app-header"></Col>
          </Row>
          <Row>
            <Col className="app-left" sm="2">
              <Switch>
                <Route path="/home">
                  <RankNav onClick={rankNavClick} />
                </Route>
              </Switch>
            </Col>
            <Col className="app-center" sm="10">
              <Switch>
                <Route path="/about">
                  <AboutUs />
                </Route>
                <Route path="/org">
                  <OrgPage />
                </Route>
                <Route path="/home">
                  <TopRepo url={topReposUrl} />
                </Route>
              </Switch>
            </Col>
          </Row>
          <Row>
            <Col className="app-footer">
              <AppFooter />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
