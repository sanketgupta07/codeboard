import React, { useState } from "react";
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
import Home from "./component/home/home";

function AppRouter(params) {
  const [topReposUrl, setTopReposUrl] = useState();
  const rankNavClick = (query) => {
    const url = `https://api.github.com/${query}`;
    setTopReposUrl(url);
  };
  return (
    <>
      <BrowserRouter basename="/codeboard">
        <AppNav />
        <Container fluid>
          <Row>
            <Col className="app-header"></Col>
          </Row>
          <Row>
            <Col className="app-left" sm="2">
              <Switch>
                <Route path="/toprepo">
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
                <Route path="/toprepo">
                  <TopRepo url={topReposUrl} />
                </Route>
                <Route path="/">
                  <Home />
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
