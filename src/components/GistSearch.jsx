import React from "react";
import { useContext } from "react";
import { GistContext } from "./GistTable";

function GistSearch() {
  const [, dispatch] = useContext(GistContext);
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default GistSearch;
