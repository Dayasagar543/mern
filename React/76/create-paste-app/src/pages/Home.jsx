import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_paste, update_paste } from "../redux/paste_slice";

const Home = () => {
  const All_pastes = useSelector((state) => {
    return state.paste.pastes;
  });
  // console.log(All_pastes);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [searchParams, setSearchparams] = useSearchParams();
  const pasteId = searchParams.get("pasteid");
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = All_pastes.find((item) => {
        return item.id === pasteId;
      });
      // console.log(paste)
      setTitle(paste.title);
      setText(paste.description);
    }
  }, [pasteId]);

  const paste_function = (e) => {
    const paste = {
      title: title,
      description: text,
      id: pasteId || Date.now().toString(36),
      created_at: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(update_paste(paste));
    } else {
      //create
      dispatch(add_paste(paste));
    }

    setTitle("");
    setText("");
    setSearchparams({});
  };

  return (
    <div className="w-full h-[80vh] flex flex-col  items-center justify-evenly ">
      <h1 className="text-3xl">create your pastes</h1>
      <div className="w-[80vw] flex flex-col justify-evenly items-center bg-pink-400 h-[60vh] rounded ">
        <input
          className="border-2 w-[60%] rounded "
          id="title"
          name="title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          cols="30"
          rows="10"
          className="border-2  w-[60%] rounded-sm  "
          id="description"
          name="description"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>

        <button
          className="border-2 h-8 px-2  w-auto  rounded-sm text-center content-center "
          onClick={paste_function}
        >
          {pasteId ? "update paste" : "create Paste"}
        </button>
      </div>
    </div>
  );
};

export default Home;
