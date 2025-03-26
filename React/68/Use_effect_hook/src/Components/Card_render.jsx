import React, { useState } from "react";
import Data_fetcher from "./Data_fetcher";
import Card from "./Card";
import "./Card_render.css"
const Card_render = () => {
  const [data, setdata] = useState([]);
  return (
    <div>
      <h1>trying to  render the data</h1>
      <Data_fetcher set_data={setdata} />
      <div className="cards">
        {data.map((ele) => (
          <Card
            id={ele.id}
            userId={ele.userId}
            title={ele.title}
            body={ele.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_render;
