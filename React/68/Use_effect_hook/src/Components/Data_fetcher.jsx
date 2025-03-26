import React, { useEffect } from "react";

const Data_fetcher = (Props) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => Props.set_data(json));
  }, []);
  return <div></div>;
};

export default Data_fetcher;
