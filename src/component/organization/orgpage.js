import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import UserInput from "../form/inputform";
import Organization from "../organization/organization";
import RepositoryList from "../repository/repolist";

export default function OrgPage(params) {
  const [org, setOrg] = useState("");
  const [loadRepos, setLoadRepos] = useState(false);
  const updateOrg = (name) => {
    console.log(name);
    setOrg(name);
    setLoadRepos(false);
  };
  const loadRepoList = () => {
    setLoadRepos(true);
  };
  return (
    <div className="App-header">
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <UserInput onSubmit={updateOrg} text="Get Org" />
        <Organization login={org} repos={loadRepoList} />
        <br />
        <RepositoryList login={org} load={loadRepos} />
      </Jumbotron>
    </div>
  );
}
