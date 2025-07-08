// File: 04-conditional-rendering/App.jsx

// Definition: Conditional Rendering in React means showing different UI elements based on a condition

import React from "react";

// Conditional Component
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome, User!</h2>;
  } else {
    return <h2>Please Log In</h2>;
  }
}

function App() {
  const isLoggedIn = true;
  const hasPermission = true;

  return (
    <div>
      <h1>Conditional Rendering Examples</h1>

      {/* Conditional return component */}
      <Greeting isLoggedIn={isLoggedIn} />

      {/* Ternary operator */}
      <p>{isLoggedIn ? "You are logged in." : "You are logged out."}</p>

      {/* Logical && operator */}
      {hasPermission && <p>You can view this content.</p>}
    </div>
  );
}

export default App;
