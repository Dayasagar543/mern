import React from "react";

const Home = () => {
  return (
    <div className="flex m-2">
      <label htmlFor="" className="flex m-2">
        Title:
      </label>
      <input
        type="text"
        placeholder="enter title"
        className="border-1 rounded-[0.5rem] text-center"
      />
    </div>
  );
};

export default Home;
