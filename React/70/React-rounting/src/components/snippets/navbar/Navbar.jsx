import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Contactus</NavLink>
        </li>
        <li>
          <NavLink>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
