import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <input type="text" onChange={(e)=>{props.Setname(e.target.value)}}/>
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
