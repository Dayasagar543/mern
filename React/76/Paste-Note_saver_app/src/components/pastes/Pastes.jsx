import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex m-2 flex-col h-auto items-center">
      <div className="flex felx-col gap-[4rem] h-auto items-center">
        <label className="m-2 font-bold text-[3rem]">Pastes search</label>
        <input
          className=" border-1 rounded-[0.5rem] text-center w-[80rem] h-[3rem]"
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((data) => {
            return (
              <div className="border-2 p-2 rounded-[5px] bg-blue-500">
                <h2>{data.title}</h2>
                <p>{data.content}</p>
                <div>
                  <button>update</button>
                  <button>delete</button>
                  <button>copy</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
