import React from "react";
import { Routes, Route } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
      </Routes>
    </div>
  );
};
