import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex  justify-around h-[5rem] bg-red-300 items-center w-[100vw]">
      <NavLink className={"border-1 p-2 rounded-full"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"border-1 p-2 rounded-full"} to={"/pastes"}>
        Pastes
      </NavLink>
    </div>
  );
};

export default Navbar;
