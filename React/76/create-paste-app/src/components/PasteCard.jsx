import React from "react";
import { delete_paste, update_paste } from "../redux/paste_slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const PasteCard = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edit = () => {};
  const copy = async (title, description) => {
    try {
      const text = `Title: ${title}\n\nDescription:\n${description}`;

      const blob = new Blob([text], { type: "text/plain" });

      const data = [
        new ClipboardItem({
          "text/plain": blob,
        }),
      ];

      await navigator.clipboard.write(data);
    } finally {
      toast.success("copied the content ");
    }
  };
  const delete_paste_card = (pasteid) => {
    console.log(pasteid);
    dispatch(delete_paste(pasteid));
  };
  const share = () => {};
  const view = (id) => {
    navigate(`/pastes/${id}`);
  };
  return (
    <div
      key={id}
      className="flex flex-col justify-center items-center text-center  bg-red-500 "
    >
      <div>{title}</div>
      <p>{description}</p>
      <div className="flex flex-row w-full justify-around ">
        <button className="border-2" onClick={edit}>
          edit
        </button>
        <button className="border-2" onClick={() => copy(title, description)}>
          copy
        </button>
        <button className="border-2" onClick={() => delete_paste_card(id)}>
          delete
        </button>
        <button className="border-2" onClick={() => share}>
          share
        </button>
        <button className="border-2" onClick={() => view(id)}>
          view
        </button>
      </div>
    </div>
  );
};

export default PasteCard;
