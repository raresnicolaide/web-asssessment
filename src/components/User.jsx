import React from "react";

import "./User.css";

function User({ owner, isAuthor = false }) {
  return (
    <div className="username">
      <img className="avatar" src={owner.avatar_url} alt={owner.login} />
      <span>{`${
        isAuthor ? owner.login.concat("/ ") : owner.login.concat(" ")
      }`}</span>
    </div>
  );
}

export default User;
