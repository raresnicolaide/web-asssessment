import React, { useState, useEffect } from "react";
import GistContentModal from "./GistContentModal";
import LanguageTag from "./LanguageTag";
import User from "./User";

import "./Gist.css";

function Gist({ owner, files, forks, description }) {
  const mainClass = "gist";
  const [users, setUsers] = useState([]);
  const [openFile, setOpenFile] = useState(null);

  useEffect(() => {
    let ignore = false;
    setUsers([]);

    getUsers(forks).then((result) => {
      if (!ignore) {
        // to get the last 3 positions in the array
        setUsers(
          result.length >= 3
            ? result.slice(result.length - 3, result.length)
            : result
        );
      }
    });

    return () => {
      ignore = true;
    };
  }, [forks]);

  async function getUsers(forksUrl) {
    const res = await fetch(forksUrl);
    if (res.ok) {
      return res.json();
    }
    return res;
  }

  function getDistinctLanguages(files) {
    const languages = [];

    for (const file in files) {
      languages.push(files[file].language);
    }

    return [...new Set([...languages])];
  }

  return (
    <div className="gist-content">
      <div className="name-container">
        <p className="name"> {`${owner}/`}</p>
        {Object.keys(files).map((name) => (
          <button
            className="button"
            key={name}
            onClick={() => setOpenFile(name)}
          >
            {name}/
          </button>
        ))}
        {getDistinctLanguages(files).map((language, index) => (
          <LanguageTag key={index} language={language} />
        ))}
      </div>
      <div>Description: {description}</div>
      <div>
        Users that forked:
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      {openFile && (
        <GistContentModal
          files={files}
          name={openFile}
          setOpenFile={setOpenFile}
        />
      )}
    </div>
  );
}

export default Gist;
