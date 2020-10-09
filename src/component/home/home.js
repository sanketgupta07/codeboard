import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import UserInput from "../form/inputform";
import Organization from "../organization/organization";



export default function Home(params) {
  const [org, setOrg]=useState("");
  const updateOrg= (name) => {
    console.log(name);
    setOrg(name);
  }
  return (
    <div className="App-header">
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <UserInput onSubmit={updateOrg} text="Get Org"/>
        <Organization login={org} />
      </Jumbotron>
    </div>
  );
}
