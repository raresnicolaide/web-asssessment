import React, { useContext } from "react";
import { GistContext } from "./GistTable";

import "./GistSearch.css";

function GistSearch() {
  const [state, dispatch] = useContext(GistContext);
  console.log(state);
  function handleSubmit(event) {
    event.preventDefault();
    getGists(event.target[0].value);
  }

  async function getGists(username) {
    const URL = `https://api.github.com/users/${username}/gists`;
    try {
      dispatch({ type: "IS_LOADING" });
      const res = await fetch(URL);
      if (res.ok) {
        const data = await res.json();
        return dispatch({ type: "GIST_SUCCESS", gists: data });
      }
      const error = await res.json();
      dispatch({ type: "GIST_ERROR", error: error.message });
    } catch (error) {
      dispatch({ type: "GIST_ERROR", error });
    }
  }
  return (
    <>
      {state.error && <p className="alert">{state.error}</p>}
      {state.gists?.length === 0 && (
        <p className="alert">The user doesn't have any gists!</p>
      )}
      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          className="search-bar"
          type="text"
          name="username"
        />
        <input className="submit" type="submit" />
      </form>
    </>
  );
}

export default GistSearch;
