import React, { useState } from "react";
import { useSelector } from "react-redux";

import PasteCard from "../components/PasteCard";
const Paste_view = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [search, setSearch] = useState("");

  return (
    <div className=" flex flex-col items-center ">
      <div className=" flex flex-col justify-evenly  text-center h-24">
        <h2 className="text-3xl">your pastes</h2>
        <div className="w-[80vw] flex justify-evenly">
          <label htmlFor="search" className="text-2xl">
            search
          </label>
          <input
            type="text"
            id="search"
            className="border-2 w-[60vw] text-center rounded-[5px]"
            placeholder="search the paste "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <button
            className="border-2 p-2 rounded-[5px]"
            onClick={() => {
              dispatch(reset_pastes());
            }}
          >
            reset
          </button>
        </div>
      </div>
      <div className=" w-[80vw] h-screen grid grid-cols-3 grid-rows-3 gap-2  m-3">
        {search
          ? pastes.filter((paste) =>
              paste.title.toLowerCase().includes(search.toLowerCase())
            )
          : pastes.map((paste) => <PasteCard card={paste} />)}
      </div>
    </div>
  );
};

export default Paste_view;
