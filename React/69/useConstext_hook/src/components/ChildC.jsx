import React, { useContext } from "react";
import { UserContext } from "../App";

const ChildC = () => {
  //4.consuming the context
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.gender}</p>
    </div>
  );
};

export default ChildC;
