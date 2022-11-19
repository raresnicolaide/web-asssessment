import React, { useState, useEffect } from "react";
import LanguageTag from "./LanguageTag";
import User from "./User";

function Gist({ owner, files, forks, description }) {
  const [users, setUsers] = useState([]);
  console.log(...Object.keys(files));
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
    <div>
      <h3>{`${owner}/${Object.keys(files)}`}</h3>
      <div>Description: {description}</div>
      {getDistinctLanguages(files).map((language, index) => (
        <LanguageTag key={index} language={language} />
      ))}
      <div>
        Users that forked:
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Gist;
