import React from "react";
import "./Login.css";
const Login = (Props) => {
  return (
    <button
      className="Login_button"
      onClick={(e) => {
        Props.set_state(true);
      }}
    >
      Login
    </button>
  );
};

export default Login;
