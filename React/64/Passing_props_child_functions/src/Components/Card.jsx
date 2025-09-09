import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="outer_bg">
      <div>{props.children}</div>
      <div>
        <button onClick={props.Count_increment}>{props.text}</button>
      </div>
    </div>
  );
};

export default Card;
