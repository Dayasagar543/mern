import React from "react";

const Card = (Props) => {
  return (
    <div>
      <h1>{Props.id}</h1>
      <p>{Props.userId}</p>
      <p>{Props.title}</p>
      <p>{Props.body}</p>
    </div>
  );
};

export default Card;
