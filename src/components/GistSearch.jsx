import React from "react";

function GistSearch() {
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
