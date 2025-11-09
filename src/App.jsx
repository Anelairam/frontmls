import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Forum } from "./pages/Forum";
import { Notes } from "./pages/Notes";
import { Profile } from "./pages/Profile";
import { Test } from "./pages/Test";
import { ToastContainer, toast } from "react-toastify";
import { NavBar } from "./organisms/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export const App = () => {
  // const notification = () => toast.success("Welcome to the App!");

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  return (
    <div>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isAuthenticated ? (
          <div>
            <p>Hello {user.name}</p>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log in</button>
        )}
      </div>
    </div>
  );
};
