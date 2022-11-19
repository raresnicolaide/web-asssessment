import React, { useContext } from "react";
import Gist from "./Gist";
import { GistContext } from "./GistTable";

function GistList() {
  const [state] = useContext(GistContext);

  return (
    <div>
      {state.gists.map((gist) => {
        return <Gist key={gist.id} />;
      })}
    </div>
  );
}

export default GistList;
