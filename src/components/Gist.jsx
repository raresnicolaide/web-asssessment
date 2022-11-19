import React from "react";
import LanguageTag from "./LanguageTag";

function Gist({ files }) {
  function getDistinctLanguages(files) {
    let languages = [];

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
