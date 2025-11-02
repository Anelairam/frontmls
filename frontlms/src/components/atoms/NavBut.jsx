import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBut = ({ name }) => {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <p>{name}</p> : <p>Please log in</p>}</div>;
};
