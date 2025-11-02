import React from "react";
import { NavBut } from "../atoms/NavBut";

export const NavBar = () => {
  return (
    <div className="w-full bg-[#AD8C67] flex justify-between">
      <div>
        <h2>You said greek</h2>
      </div>
      <div className="flex justify-between">
        <NavBut name="Class" />
        <NavBut name="Notifications" />
        <NavBut name="Profile" />
      </div>
    </div>
  );
};
