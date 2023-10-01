import './App.css';
import React from 'react';
import Landing from './Components/Landing';
// import Login from './Components/Login';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-6">
        <Landing />
        {/* Add a login component here */}
      </div>
    </div>
  );
}

export default App;
