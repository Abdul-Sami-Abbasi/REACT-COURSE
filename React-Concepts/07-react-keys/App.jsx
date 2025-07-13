// File: 07-react-keys/App.jsx

import React from "react";

const items = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
];

function App() {
  return (
    <div>
      <h1>React Keys Example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
