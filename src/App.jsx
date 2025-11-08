import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Forum } from "./pages/Forum";
import { Notes } from "./pages/Notes";
import { Profile } from "./pages/Profile";
import { Test } from "./pages/Test";
import { ToastContainer, toast } from "react-toastify";
import { NavBar } from "./organisms/NavBar";

export const App = () => {
  // const notification = () => toast.success("Welcome to the App!");

  return (
    <div>
      {/* <button onClick={notification}>Show Welcome Notification</button>
      <ToastContainer /> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};
