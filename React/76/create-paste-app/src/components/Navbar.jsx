import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  text-center flex flex-row justify-evenly h-[15vh] items-center bg-blue-400 ">
      <div className="w-[30%] text-center text-2xl ">
        <NavLink to="/">Home</NavLink>
      </div>

      <div className=" flex justify-evenly w-[70%]">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contactUs">ContactUS</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/Pastes">Pastes</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
