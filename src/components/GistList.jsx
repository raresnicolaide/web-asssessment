import React, { useContext } from "react";
import Gist from "./Gist";
import { GistContext } from "./GistTable";

function GistList() {
  const [state] = useContext(GistContext);
  return (
    <div>
      {state.gists.map((gist) => (
        <Gist
          owner={gist.owner}
          key={gist.id}
          files={gist.files}
          forks={gist.forks_url}
          description={gist.description}
        />
      ))}
    </div>
  );
}

export default GistList;
