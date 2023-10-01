// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

ReactDOM.render(
  <BrowserRouter>
    <BubblyContainer />
    <Routes>
      <Route path="/" exact element={<Landing />} />

      <Route
        path="/"
        element={
          <>
            <BubblyLink colorStart="#3498DA" to="/">
              Landing
            </BubblyLink>

            <Outlet />
          </>
        }
      >
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="*" element={<>No Match</>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
