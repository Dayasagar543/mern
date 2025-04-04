import React from "react";
import { useNavigate } from "react-router";

const Button = () => {
  const navigate = useNavigate();
  const click_handler = () => {
    navigate('/about');
  };
  return (
    <div>
      <button onClick={click_handler}>About page </button>
    </div>
  );
};

export default Button;
