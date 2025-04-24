import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFrompastes, updateToPastes } from "../../redux/paste_slice";
const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [update, setUpdate] = useState("");
  const [del, setDel] = useState("");
  const [cp, setcp] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    setUpdate(e.target.value);
    dispatch(updateToPastes(update));
  };

  const handleDelete = (e) => {
    setDel(e.target.value);
    dispatch(removeFrompastes(del));
  };

  const handleCopy = (e) => {
    setcp(e.target.value);
    dispatch();
  };

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
      <div className="grid grid-cols-3 gap-3 w-full place-items-center">
        {filteredData.length > 0 &&
          filteredData.map((data) => {
            return (
              <div className="border-2 p-2 rounded-[5px] bg-blue-500 w-[300px] h-[300px]">
                <h2>{data.title}</h2>
                <p>{data.content}</p>
                <div className=" gap-2 w-full h-[7rem] flex items-center justify-around">
                  <button
                    onClick={handleUpdate}
                    className="border-2 p-4 rounded-[5px]  "
                  >
                    update
                  </button>
                  <button
                    onClick={handleDelete}
                    className="border-2 p-4 rounded-[5px] "
                  >
                    delete
                  </button>
                  <button
                    onClick={handleCopy}
                    className="border-2 p-4 rounded-[5px]  "
                  >
                    copy
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
