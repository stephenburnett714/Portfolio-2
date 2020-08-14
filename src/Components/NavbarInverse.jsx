import React from "react";
import Burger from "./BurgerInverse";
import logo from "../Images/Logo-Black.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
    className="flex flex-row align-items-center items-center bg-white p-4 justify-between fixed w-screen"
      id="navbar"
    >
      
      <div className="lg:pl-32">
        <NavLink exact to={"/"}>
          <img className="h-10 w-16" src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="flex align-items-center hidden xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">
        <div>
          <NavLink className="text-black pr-20" exact to={"/about"}>
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="text-black pr-20" exact to={"/work"}>
            Work
          </NavLink>
        </div>

        <div>
          <NavLink className="text-black" exact to={"/contact"}>
            Contact
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden flex align-items-center">
      <Burger />
      </div>
    </div>
  );
}
