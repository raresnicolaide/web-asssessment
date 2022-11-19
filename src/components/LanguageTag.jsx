import React from "react";

import "./LanguageTag.css";

function LanguageTag({ language }) {
  function generateColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
  }
  const color = language ? generateColor(language) : null;
  return (
    <span style={{ backgroundColor: `${color}` }} className="tag">
      {language}
    </span>
  );
}

export default LanguageTag;
