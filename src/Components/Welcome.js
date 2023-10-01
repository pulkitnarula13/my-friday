import React from "react";

function Welcome({ userEmail }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Welcome, {userEmail}!</h2>
        <p>You have successfully signed up.</p>
        {/* TODO: Add more content */}
      </div>
    </div>
  );
}

export default Welcome;
