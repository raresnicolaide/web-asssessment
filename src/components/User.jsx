import React from "react";

import "./User.css";

function User({ owner }) {
  return (
    <div className="username">
      <img className="avatar" src={owner.avatar_url} alt={owner.login} />
      <span>{`${owner.login.concat(" ")}/`}</span>
    </div>
  );
}

export default User;
