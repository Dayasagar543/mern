import React from "react";
import "./Logout.css"
const logout = (Props) => {
  return (
    <button
      className="Logout_button"
      onClick={(e) => {
        Props.set_state(false);
      }}
    >
      log out
    </button>
  );
};

export default logout;
