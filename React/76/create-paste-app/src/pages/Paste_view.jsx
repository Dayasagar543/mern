import React from "react";
import { useSelector } from "react-redux";
const Paste_view = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const edit = () => {};
  const copy = () => {};
  const delete_paste = () => {};
  const share = () => {};

  return (
    <div className=" flex flex-col items-center ">
      Paste_view
      <label htmlFor="search">search</label>
      <input
        type="text"
        id="serach"
        className="border-2 w-[60vw] text-center"
        placeholder="serach the paste "
      />
      <div className=" w-[80vw] h-screen grid grid-cols-3 gap-2 text-center">
        {pastes.map((paste) => (
          <div
            id={paste.id}
            className=" w-28 h-20 flex flex-col  items-center text-center "
          >
            <div>{paste.title}</div>
            <p>{paste.description}</p>
            <div className="flex flex-row w-full ">
              <button className="border-2" onClick={edit}>
                edit
              </button>
              <button className="border-2" onClick={copy}>
                copy
              </button>
              <button className="border-2" onClick={delete_paste}>
                delete
              </button>
              <button className="border-2" onClick={share}>
                share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paste_view;
