import React, { useContext } from "react";
import { Theme } from "../App";

const ChildD = () => {
  const { theme, setTheme } = useContext(Theme);
  const handleClick = (e) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <h1 style={{color:theme==='light'?"black":"white"}}>hi there</h1>
      <button onClick={handleClick}>clickme</button>
    </div>
  );
};

export default ChildD;
