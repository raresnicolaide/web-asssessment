import React, { useContext } from "react";
import { GistContext } from "./GistTable";

function GistSearch() {
  const [, dispatch] = useContext(GistContext);

  function handleSubmit(event) {
    event.preventDefault();
    getGists(event.target[0].value);
  }

  async function getGists(username) {
    const URL = `https://api.github.com/users/${username}/gists`;
    try {
      dispatch({ type: "IS_PENDING" });
      const res = await fetch(URL);
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "GIST_SUCCESS", gists: data });
      }
    } catch (error) {
      dispatch({ type: "GIST_ERROR", error });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default GistSearch;
