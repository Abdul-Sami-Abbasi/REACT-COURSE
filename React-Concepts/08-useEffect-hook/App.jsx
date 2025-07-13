// File: 08-useEffect-hook/App.jsx

import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Run once on mount
  useEffect(() => {
    console.log("Component mounted ✅");
  }, []);

  // Run every time count changes
  useEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>useEffect Hook Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
