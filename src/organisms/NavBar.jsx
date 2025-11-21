import React from "react";
import { Link } from "react-router";

export const NavBar = ({validatedUser}) => {
  if (validatedUser) {
    console.log("NavBar validatedUser:", validatedUser);
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm font-mono">
        <div className="flex-1 font-mono text-xl">
            <Link to={"/"}>You said greek</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/forum"}>Forum</Link>
            </li>
            <li>
              <Link to={"/notes"}>Notes</Link>
            </li>
            <li>
              <Link to={"/tests"}>Test</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
