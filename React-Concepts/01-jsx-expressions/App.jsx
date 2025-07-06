// File: 01-jsx-expressions/App.jsx

import React from "react";

const name = "Abdul Sami";
const age = 22;
const greet = () => "Welcome to React!";

function App() {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>2 + 2 = {2 + 2}</p>
      <p>{greet()}</p>
      <p>{age > 18 ? "Adult" : "Minor"}</p>
    </div>
  );
}

export default App;
