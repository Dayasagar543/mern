import React from "react";
import { delete_paste, reset_pastes } from "../redux/paste_slice";
import { useDispatch } from "react-redux";
const PasteCard = ({ card }) => {
  const dispatch = useDispatch();
  const edit = () => {};
  const copy = () => {};
  const delete_paste_card = (pasteid) => {
    dispatch(delete_paste(pasteid));
  };
  const share = () => {};
  return (
    <div
      key={card.id}
      className="flex flex-col justify-center items-center text-center  bg-red-500 "
    >
      <div>{card.title}</div>
      <p>{card.description}</p>
      <div className="flex flex-row w-full justify-around ">
        <button className="border-2" onClick={edit}>
          edit
        </button>
        <button className="border-2" onClick={copy}>
          copy
        </button>
        <button className="border-2" onClick={delete_paste_card}>
          delete
        </button>
        <button className="border-2" onClick={share}>
          share
        </button>
      </div>
    </div>
  );
};

export default PasteCard;
