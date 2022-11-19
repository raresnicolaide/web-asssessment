import React from "react";

function User({ user }) {
  return (
    <>
      <img
        style={{ borderRadius: "50%", width: "30px", height: "30px" }}
        src={user.owner.avatar_url}
        alt={user.owner.login}
      />
      <span>{user.owner.login.concat(" ")}</span>
    </>
  );
}

export default User;
