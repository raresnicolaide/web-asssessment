import React from "react";

function User({ owner }) {
  return (
    <>
      <img
        style={{ borderRadius: "50%", width: "30px", height: "30px" }}
        src={owner.avatar_url}
        alt={owner.login}
      />
      <span>{owner.login.concat(" ")}</span>
    </>
  );
}

export default User;
