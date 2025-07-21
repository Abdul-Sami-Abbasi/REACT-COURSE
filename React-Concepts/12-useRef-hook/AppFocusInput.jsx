import React, { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // focus the input
  };

  return (
    <div>
      <h2>useRef Hook - Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
