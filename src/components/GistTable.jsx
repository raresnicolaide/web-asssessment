import React, { useReducer, createContext } from "react";

const GistContext = createContext();

function gistReducer(state, action) {
  switch (action.type) {
    case "IS_PENDING": {
      return { ...state, isPending: true };
    }
    case "GIST_SUCCESS": {
      return { ...state, gists: action.payload };
    }
    case "GIST_ERROR": {
      return { ...state, error: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GistTable() {
  return <div>GistTable</div>;
}

export default GistTable;
