import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import AboutUs from "./component/about/aboutus";
import AppNav from "./component/nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home/home";
import "./App.css";
import AppFooter from "./footer";

function AppRouter(params) {
  const browserHistory = createBrowserHistory();
  return (
    <>
      <Router history={browserHistory}>
        <div>
          <AppNav />          
            <div className="body" fluid="sm">
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>            
             <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
      <AppFooter />
    </>
  );
}

export default AppRouter;
