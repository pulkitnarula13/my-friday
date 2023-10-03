import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Welcome from './Components/Welcome';
import Login from './Components/Login';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-6">
      <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/welcome" element={<Welcome />} />

            {/* Add a login component here */}
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
