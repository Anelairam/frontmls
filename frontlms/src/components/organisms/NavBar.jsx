import React from "react";
import { NavBut } from "../atoms/NavBut";

export const NavBar = () => {
  return (
    <div className="bg-[#AD8C67] flex justify-between">
      <div>
        <h2>You said greek</h2>
      </div>
      <div className="flex justify-between">
        <NavBut name="Home" />
        <NavBut name="Profile" />
        <NavBut name="Settings" />
      </div>
    </div>
  );
};
