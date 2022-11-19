import React, { useContext } from "react";
import { GistContext } from "./GistTable";

function GistList() {
  const [state] = useContext(GistContext);

  return <div>GistList</div>;
}

export default GistList;
