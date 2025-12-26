import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  const authenticateInBackend = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: import.meta.env.VITE_AUTH_AUDIENCE,
        scope: "openid profile email",
      });

      const res = await axios.get("http://localhost:7878/user/validate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("res from backend:", res.data);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  console.log("isAuthenticated:", isAuthenticated);

  return (
    <div>
      <h1>Hello</h1>
      <div>
        {!isAuthenticated ? (
          <button onClick={loginWithRedirect}>Login</button>
        ) : (
          <div>
            <button onClick={authenticateInBackend}>
              Authenticate in backend
            </button>
            <br />
            <button onClick={() => logout()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};
