import React from "react";
import { useParams } from "react-router";

const Params = () => {
  let { id } = useParams();
  return <div>parameters:{id}</div>;
};

export default Params;
