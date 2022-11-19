import React, { useContext } from "react";
import Gist from "./Gist";
import { GistContext } from "./GistTable";

import "./GistList.css";

function GistList() {
  const [state] = useContext(GistContext);
  console.log(state);
  return (
    <div>
      {state.isLoading && <div className="loader"> </div>}
      {state.gists.map((gist) => (
        <Gist
          owner={gist.owner}
          key={gist.id}
          files={gist.files}
          forks={gist.forks_url}
          description={gist.description}
        />
      ))}
      {Boolean(state.gists) && (
        <p className="alert"> This user doesn't any have gists!</p>
      )}
    </div>
  );
}

export default GistList;
