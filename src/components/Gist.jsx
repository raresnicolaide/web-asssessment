import React, { useState, useEffect } from "react";
import LanguageTag from "./LanguageTag";

function Gist({ files, forks }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    let ignore = false;
    setUsers(null);

    getUsers(forks).then((result) => {
      if (!ignore) {
        setUsers(result);
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
      {getDistinctLanguages(files).map((language, index) => (
        <LanguageTag key={index} language={language} />
      ))}
    </div>
  );
}

export default Gist;
