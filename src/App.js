import React from "react";
import Organization from "./component/organization";
import Repostory from "./component/repository";

export default function App() {
  return (
    <>
      <Organization login="facebook" />
      <Repostory login="facebook" name="redex" />
    </>
  );
}
