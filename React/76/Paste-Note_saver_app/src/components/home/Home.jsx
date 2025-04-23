import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateToPastes, addToPastes } from "../../redux/paste_slice";
const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [SearchParams, setSearchParams] = useSearchParams();
  const pasteId = SearchParams.get("pasteId");
  const dispatch = useDispatch();

  const handle_title = (e) => {
    setTitle(e.target.value);
  };
  const handle_text_area = (e) => {
    setValue(e.target.value);
  };

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      id: pasteId || Date.now().toString(36),
      create_on: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
      //create
    }

    //clearing the state
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  return (
    <div className="flex m-2 flex-col h-auto items-center">
      <div className="flex felx-col gap-[4rem] h-auto items-center">
        <label htmlFor="" className=" m-2 font-bold text-[3rem]">
          Title:
        </label>
        <input
          type="text"
          placeholder="enter title"
          value={title}
          className="border-1 rounded-[0.5rem] text-center w-[80rem] h-[3rem] "
          onChange={handle_title}
        />
        <button
          className="m-1 border-2 p-2 rounded-md bg-blue-300"
          onClick={createPaste}
        >
          {pasteId ? "update paste" : "create my paste"}
        </button>
      </div>
      <div className="mx-auto">
        <textarea
          value={value}
          placeholder="enter your cotent"
          onChange={handle_text_area}
          rows={50}
          cols={100}
          className="rounded-2xl  border-2 p-4"
        />
      </div>
    </div>
  );
};

export default Home;
