import React, { useReducer, createContext } from "react";
import GistList from "./GistList";
import GistSearch from "./GistSearch";

export const GistContext = createContext();

function gistReducer(state, action) {
  switch (action.type) {
    case "IS_LOADING": {
      return { ...state, isLoading: true };
    }
    case "GIST_SUCCESS": {
      return { ...state, isLoading: false, gists: action.gists };
    }
    case "GIST_ERROR": {
      return { ...state, isLoading: false, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GistProvider({ children }) {
  const [state, dispatch] = useReducer(gistReducer, {
    isLoading: false,
    gists: [],
    error: null,
  });
  const value = [state, dispatch];
  return <GistContext.Provider value={value}>{children}</GistContext.Provider>;
}

function GistTable() {
  return (
    <GistProvider>
      <GistSearch />
      <GistList />
    </GistProvider>
  );
}

export default GistTable;
