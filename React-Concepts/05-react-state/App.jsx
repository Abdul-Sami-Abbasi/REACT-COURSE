// File: 05-react-state/App.jsx

import React, { useState } from "react";

function App() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React State - Counter Example</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
