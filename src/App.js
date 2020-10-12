import React from "react";
import InputForm from "./component/form/input";
import Organization from "./component/organization/organization";
import Repostory from "./component/repository/repository";

export default function App() {
  return (
    <>
      <InputForm />
      <Organization login="facebook" />
      <Repostory login="facebook" name="redex" />
    </>
  );
}
