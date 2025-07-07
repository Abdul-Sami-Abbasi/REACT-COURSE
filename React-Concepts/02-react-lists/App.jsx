// File: 02-react-lists/App.jsx

import React from "react";

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

function App() {
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
