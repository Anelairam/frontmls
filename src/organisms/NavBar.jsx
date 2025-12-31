import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0(); // TODO: get from auth hook
  return (
    <div>
      <div>You Said Greek</div>
      <div>
        {isAuthenticated ? (
          <ul>
            <li>Profile</li>
            <li>Classroom</li>
            <li>Notes</li>
            <li>Logout</li>
          </ul>
        ) : (
          <ul>
            <button onClick={loginWithRedirect}>Login</button>
          </ul>
        )}
      </div>
    </div>
  );
};
