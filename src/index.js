// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Routes,Outlet } from 'react-router-dom';
import App from './App';
import SignUp from './Components/SignUp';
import Welcome from './Components/Welcome';
import { BubblyContainer,BubblyLink } from "react-bubbly-transitions";

ReactDOM.render(
  
  <BrowserRouter>
  <BubblyContainer />
  <Routes>
    <Route
      path="/"
      element={
        <>
          <BubblyLink to="/">SignUp</BubblyLink>
          <BubblyLink to="/welcome">Login</BubblyLink>
          <Outlet />
        </>
      }
    >
     
      <Route path="/" element={<SignUp />} />
      <Route path="/welcome" element={< Welcome/>} />
      <Route path="*" element={<>No Match</>} />
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);
