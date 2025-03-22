import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <h1> {props.children}</h1>
      <div>
        <button onClick={props.Count_increment}>{props.text}</button>
      </div>
    </div>
  );
};

export default Card;
