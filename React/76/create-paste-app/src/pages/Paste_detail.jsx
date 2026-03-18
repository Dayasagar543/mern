import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Paste_detail = () => {
  const { id } = useParams();
  const all_pastes = useSelector((state) => {
    return state.paste.pastes;
  });

  const paste= all_pastes.filter((item) => {
    return item.id === id;
  });
  console.log(paste);
  return (
    <div className="w-full h-[80vh] flex flex-col  items-center justify-evenly ">
      <h1 className="text-3xl">view your pastes</h1>
      <div className="w-[80vw] flex flex-col justify-evenly items-center bg-pink-400 h-[60vh] rounded ">
        <input
          className="border-2 w-[60%] rounded "
          id="title"
          name="title"
          type="text"
          value={paste[0].title}
        />
        <textarea
          cols="30"
          rows="10"
          className="border-2  w-[60%] rounded-sm  "
          id="description"
          name="description"
          value={paste[0].description}
        ></textarea>
      </div>
    </div>
  );
};

export default Paste_detail;
