import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Forum } from "./pages/Forum";
import { Notes } from "./pages/Notes";
import { Profile } from "./pages/Profile";
import { Test } from "./pages/Test";

export const App = () => {
  return (
    <div>
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
