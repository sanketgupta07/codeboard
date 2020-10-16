import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { BiBuildings } from "react-icons/bi";
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
    <>
      <Jumbotron fluid style={{ background: "none" }}>
        <h1>
          <BiBuildings />
          &nbsp;Organization
        </h1>
        <p>Search an organization of Github and check its repo.</p>
        <div className="col-sm-4">
          <UserInput onSubmit={updateOrg} text="Search Org" />
        </div>
      </Jumbotron>
      {org === "" ? (
        ""
      ) : (
        <>
          <Organization login={org} repos={loadRepoList} />
          <br />
          <RepositoryList login={org} load={loadRepos} />
        </>
      )}
    </>
  );
}
