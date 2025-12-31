import React from "react";
import { Routes, Route } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Home } from "./pages/Home";
import { NavBar } from "./organisms/NavBar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
